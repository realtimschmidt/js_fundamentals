const isEven = (value) => {
  if (value < 0  || !Number.isInteger(value)) {
    return `value must an integer greater than or equal to 0`
  }
  if (value === 0) {
    return true
  }
  if (value === 1) {
    return false
  }
  return isEven(value - 2)
}

module.exports = (value) => {
  return isEven(value)
}