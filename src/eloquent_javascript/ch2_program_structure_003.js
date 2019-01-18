const makeChessBoard = (boardSize) => {
  let board
  board = ''
  
  if (typeof boardSize != 'number' || !Number.isInteger(boardSize) || boardSize < 1) {
    return console.log('Enter a postive integer')
  }

  result = board.concat(' # # #\n# # # ')
  return result
}

module.exports = (size) => {
  return makeChessBoard(size)
}