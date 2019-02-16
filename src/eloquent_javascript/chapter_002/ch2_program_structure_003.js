const makeChessBoard = (boardSize) => {
  let board
  board = ''
  
  if (typeof boardSize != 'number' || !Number.isInteger(boardSize) || boardSize < 1) {
    return console.log('Enter a postive integer')
  }

  for(j = 0; j < boardSize; j++) {
    let width = ''
    if (j % 2) {
      for(i = 0; i < boardSize; i++) {
        if (i % 2) {
          width += ' '
        } else {
          width += '#'
        }
      }
    } else {
      for(i = 0; i < boardSize; i++) {
        if (i % 2) {
          width += '#'
        } else {
          width += ' '
        }
      }
    }
    if (j < boardSize - 1) {
      width += '\n'
    }
    board += width
  }
  return board
}

module.exports = (size) => {
  return makeChessBoard(size)
}