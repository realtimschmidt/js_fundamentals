const sumOfRange = (start, end, increment) => {
  let counter = start
  const rangeArr = []
  if (start < end) {
    while (counter <= end) {
      rangeArr.push(counter)
      counter += increment
    }
  } else {
    while (counter >= end) {
      rangeArr.push(counter)
      counter += increment
    }
  }
  return rangeArr.reduce((acc, cur) => acc + cur)
}

module.exports = (start, end, increment = 1) => {
  return sumOfRange(start, end, increment)
}