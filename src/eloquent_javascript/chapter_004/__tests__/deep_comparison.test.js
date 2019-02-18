const deepCompare = require('../deep_comparison')

let number
let object
let notObject

describe('deep comparison', () => {
  beforeEach(() => {
    number = 4
    object = {
      a: 1,
      b: 2
    }
    notObject = null
  })

  it('compares primitives', () => {
    expect(deepCompare(number, 4)).toEqual(true)
    expect(deepCompare(number, 3)).toEqual(false)
  })

  it('compares objects', () => {
    expect(deepCompare(object, object)).toBe(true)
    expect(deepCompare(object, {a:1, b:2})).toBe(true)
  })

  it('handles null differently than objects', () => {
    expect(deepCompare(notObject, null)).toBe(true)
  })
})