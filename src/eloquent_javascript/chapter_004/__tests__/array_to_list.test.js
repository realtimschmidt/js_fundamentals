const arrayToList = require('../array_to_list')

let array
let list

describe('array to list', () => {
  beforeEach(() => {
    array = [1, 2, 3]
    list = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    }
  })

  it('returns a list of obects', () => {
    expect(arrayToList(array)).toEqual(list)
  })
})