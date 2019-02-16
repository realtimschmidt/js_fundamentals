const countChars = (value, letter) => {
  if (typeof value !== 'string') {
    return `${value} must be a string`
  }
  const bArray = value.split('')
  const onlyB = bArray.filter(char => char === letter)
  return onlyB.length
}

module.exports = (value, letter) => {
  return countChars(value, letter)
}