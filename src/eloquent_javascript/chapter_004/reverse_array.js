const reverseArray = (array) => {
  let newArray = []
  array.forEach(index => newArray.unshift(index))
  return newArray
}

module.exports = (array) => {
  return reverseArray(array)
}