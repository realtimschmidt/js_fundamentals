const deepCompare = (first, second) => {
  if (typeof first === "object" && first !== null || typeof second === "object" && second !== null) {
    if (Object.keys(first).length !== Object.keys(second).length) {
      return false
    }
    // recursive call using Object.keys(obj) to comapare properites
  }
  return first === second
}

module.exports = (first, second) => {
  return deepCompare(first, second)
}