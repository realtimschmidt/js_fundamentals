const min = (a, b) => {
  if (a <= b) {
    return a
  } else {
    return b
  }
}

module.exports = (a, b) => {
  return min(a, b)
}
