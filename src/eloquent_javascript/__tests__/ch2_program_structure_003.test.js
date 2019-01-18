const chessBoard = require('../ch2_program_structure_003')

let value

it('should return a string', () => {
  value = 8
  expect(chessBoard(value)).toBe(' # # #\n# # # ')
})