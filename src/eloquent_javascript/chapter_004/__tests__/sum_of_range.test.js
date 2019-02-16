const sumOfRange = require('../sum_of_range')

let start
let end
let increment
let result

describe('sum of range', () => {
  beforeEach(() => {
    start = 1
    end = 5
    result = 15
  })

  it('returns the sum numbers from start to finish', () => {
    expect(sumOfRange(start, end)).toEqual(result)
  })

  it('returns the sum of number when the start is incremented by 3rd argument', () => {
    increment = 2
    result = 9
    expect(sumOfRange(start, end, increment)).toEqual(result)
  })

  it('returns the sum of number when the start is incremented by 3rd negative argument', () => {
    increment = -2
    start = 6
    end = 2
    result = 12
    expect(sumOfRange(start, end, increment)).toEqual(result)
  })
})