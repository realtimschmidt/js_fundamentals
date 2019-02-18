const arrayToList = (array) => {
  let result = null
  array.forEach(i => {
    const end = array[array.length - 1 - array.indexOf(i)]
    result = { value: end, rest: result }
  })
  return result
}

module.exports = (array) => {
  return arrayToList(array)
}