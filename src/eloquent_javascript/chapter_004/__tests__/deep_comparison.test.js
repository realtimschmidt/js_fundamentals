const deepCompare = require('../deep_comparison')

let number

describe('deep comparison', () => {
  beforeEach(() => {
    number = 4
  })

  it('compares primitives', () => {
    expect(deepCompare(number, 4)).toEqual(true)
    expect(deepCompare(number, 3)).toEqual(false)
  })
})