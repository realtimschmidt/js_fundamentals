const deepCompare = (first, second) => {
  return first === second
}

module.exports = (first, second) => {
  return deepCompare(first, second)
}