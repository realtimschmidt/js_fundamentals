const reverseInPlace = require('../reverse_in_place')

let array
let result

describe('reverse array in place', () => {
  beforeEach(() => {
    array = [1, 2, 3, 4, 5]
    result = { array: [5, 4, 3, 2, 1] }
  })

  it('reverses array and returns same array', () => {
    expect(reverseInPlace(array)).toEqual(result)
  })
})