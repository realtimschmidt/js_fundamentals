const flatten = require('../flattening')

let array

describe('flatten', () => {
  beforeEach(() => {
    array = [[1,2,3], [4,5,6], [7,8,9]]
  })

  it('takes an array of arrays and combines them into one array', () => {
    expect(flatten(array)).toEqual([1,2,3,4,5,6,7,8,9])
  })
})