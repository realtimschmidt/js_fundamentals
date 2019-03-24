const every = require('../every')

describe('every', () => {
  let array
  let testFunc

  beforeEach(() => {
    array = [1, 3, 5]
    testFunc = n => n < 10
  })

  it('should return true when array has items less than 10', () => {
    expect(every(array, testFunc)).toBe(true)
  })

  it('should return false when array has items greater than 10', () => {
    array.push(11, 3)
    expect(every(array, testFunc)).toBe(false)
  })
})