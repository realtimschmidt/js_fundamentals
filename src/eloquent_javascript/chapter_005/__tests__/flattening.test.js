const flatten = require('../flattening')

let first
let second

describe('flatten', () => {
  beforeEach(() => {
    first = [1,2,3,4]
    second = [5,6,7,8]
  })

  it('takes 2 arrays and combines them into one array', () => {
    expect(flatten(first, second)).toEqual([1,2,3,4,5,6,7,8])
  })
})