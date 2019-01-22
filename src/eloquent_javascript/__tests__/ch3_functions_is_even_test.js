const isEven = require('../ch3_functions_is_even')

let value
value = 50

it('it takes a positive number', () => {
  expect(value >= 0).toBeTruthy()
})

it('it takes an integer', () => {
  expect(Number.isInteger(value)).toBeTruthy()
})

it('is even', () => {
  expect(isEven(value)).toEqual(true)
})

it('is odd', () => {
  value = 75
  expect(isEven(value)).toEqual(false)
})