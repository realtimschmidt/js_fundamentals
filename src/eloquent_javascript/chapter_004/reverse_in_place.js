const reverseInPlace = (array) => {
  let tempNum
  const middleIndex = Math.floor(array.length / 2)
  for (let i = 0; i < middleIndex; i++) {
    tempNum = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tempNum
  }
  return { array }
}

module.exports = (array) => {
  return reverseInPlace(array)
}