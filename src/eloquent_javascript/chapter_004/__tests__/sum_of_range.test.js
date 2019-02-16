const sumOfRange = require('../sum_of_range')

let start
let end
let result

describe('sum of range', () => {
  beforeEach(() => {
    start = 1
    end = 5
    result = [1, 2, 3, 4, 5]
  })

  it('returns an array of numbers from start to finish', () => {
    expect(sumOfRange(start, end)).toEqual(result)
  })
})