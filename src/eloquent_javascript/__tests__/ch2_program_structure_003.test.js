const chessBoard = require('../ch2_program_structure_003')

let value

it('should return a specific 1 character board', () => {
  value = 1
  expect(chessBoard(value)).toEqual(' ')
})

it('should return a specific even board', () => {
  value = 2
  expect(chessBoard(value)).toEqual(' #\n# ')
})

it('should return a specific odd board', () => {
  value = 3
  expect(chessBoard(value)).toEqual(' # \n# #\n # ')
})

it('should return a specific odd board', () => {
  value = 5
  expect(chessBoard(value)).toEqual(' # # \n# # #\n # # \n# # #\n # # ')
})

it('should return a specific odd board', () => {
  value = 8
  expect(chessBoard(value)).toEqual(' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ')
})