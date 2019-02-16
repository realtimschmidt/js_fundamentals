const sumOfRange = (start, end) => {
  let counter = start
  const result = []
  while (counter <= end) {
    result.push(counter)
    counter++
  }
  return result
}

module.exports = (start, end) => {
  return sumOfRange(start, end)
}