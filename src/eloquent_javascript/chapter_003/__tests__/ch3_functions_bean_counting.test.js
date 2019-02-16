const countChars = require('../ch3_functions_bean_counting')

let value
let letter

describe('bean counter', () => {
  beforeEach(() => {
    value = 'The Big Bag of butter has been frozen.'
    letter = 'B'
  })

  it('only accepts strings', () => {
    value = 20
    expect(countChars(value, letter)).toBe(`${value} must be a string`)
  })
  
  it('returns the number of Bs', () => {
    expect(countChars(value, letter)).toBe(2)
  })

  it('returns the number of any letter passed in', () => {
    letter = 'e'
    expect(countChars(value, letter)).toBe(5)
  })
})