const deepCompare = (first, second) => {
  if (typeof first === "object" && first !== null || typeof second === "object" && second !== null) {
    console.log(first, second)
    return first === second
  }
  return first === second
}

module.exports = (first, second) => {
  return deepCompare(first, second)
}