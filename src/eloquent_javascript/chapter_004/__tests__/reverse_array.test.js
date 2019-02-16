const reverseArray = require('../reverse_array')

let array
let result

describe('rever array', () => {
  beforeEach(() => {
    array = [1, 2, 3, 4, 5]
    result = [5, 4, 3, 2, 1]
  })

  it('reverses array by return a new array', () => {
    expect(reverseArray(array)).toEqual(result)
  })
})