const every = (array, test) => {
  const falseResult = array.find(index => !test(index))
  if (falseResult) return false
  return true
}

module.exports = (array, test) => {
  return every(array, test)
}