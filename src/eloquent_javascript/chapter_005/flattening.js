const flatten = (array) => {
  return array.reduce((current, next) => current.concat(next))
}

module.exports = (array) => {
  return flatten(array)
}