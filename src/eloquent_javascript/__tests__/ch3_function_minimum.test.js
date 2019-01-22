const minimum = require('../ch3_functions_minimum')

let a
let b

it('returns the smaller number', () => {
  a = 0
  b = 10
  expect(minimum(a, b)).toEqual(0)
})
