const loop = require('../your_own_loop')

describe('your own loop', () => {
  let startValue
  let testFunc
  let updateFunc

  beforeEach(() => {
    startValue = 3
    testFunc = n => n > 0
    updateFunc = n => n - 1
    bodyFunc = console.log
  })

  it('should call body function 3 times', () => {
    expect(loop(startValue, testFunc, updateFunc, bodyFunc)).toEqual([3,2,1])
  })
})