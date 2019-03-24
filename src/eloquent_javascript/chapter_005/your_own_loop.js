const loop = (start, test, update, body) => {
  let n = start
  let result = []
  while (test(n)) {
    body(n)
    result.push(n)
    n = update(n)
  }
  return result
}

module.exports = (start, test, update, body) => {
  return loop(start, test, update, body)
}