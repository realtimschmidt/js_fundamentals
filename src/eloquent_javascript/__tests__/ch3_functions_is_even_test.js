const isEven = require('../ch3_functions_is_even')

let value

describe('isEven', () => {
  beforeEach(() => {
    value = 50
  })

  it('is even', () => {
    expect(isEven(value)).toEqual(true)
  })
  
  it('is odd', () => {
    value = 75
    expect(isEven(value)).toEqual(false)
  })

  it('only takes positive numbers', () => {
    value = -1
    expect(isEven(value)).toEqual('value must be an integer greater than or equal to 0')
  })
  
  it('it only takes integers', () => {
    value = 5.5
    expect(isEven(value)).toEqual('value must be an integer greater than or equal to 0')
  })
  
})

