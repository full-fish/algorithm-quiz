function solution(keyinput, board) {
  let x = 0,
    y = 0
  const [limitX, limitY] = [~~(board[0] / 2), ~~(board[1] / 2)]
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === 'left') {
      if (x < 0 && -x === limitX) continue
      x--
    } else if (keyinput[i] === 'right') {
      if (x > 0 && x === limitX) continue
      x++
    } else if (keyinput[i] === 'up') {
      if (y > 0 && y === limitY) continue
      y++
    } else {
      if (y < 0 && -y === limitY) continue
      y--
    }
  }
  return [x, y]
}
let keyinput = ['left', 'left', 'left', 'right']
let board = [3, 3]
console.log(solution(keyinput, board))
