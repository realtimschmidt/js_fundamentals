const sumOfRange = (start, end) => {
  let counter = start
  const rangeArr = []
  while (counter <= end) {
    rangeArr.push(counter)
    counter++
  }
  return rangeArr.reduce((acc, cur) => acc + cur )
}

module.exports = (start, end) => {
  return sumOfRange(start, end)
}