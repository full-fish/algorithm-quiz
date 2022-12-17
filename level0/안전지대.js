function solution(board) {
  let matrix = new Array(board.length).fill(0).map(() => new Array(board.length).fill(0))
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        for (let k = -1; k < 2; k++) {
          for (let l = -1; l < 2; l++) {
            if (matrix?.[i + k]?.[j + l] !== undefined) matrix[i + k][j + l] = 1
          }
        }
      }
    }
  }
  return matrix.reduce((acc, cur) => acc + cur.filter(ele => ele === 0).length, 0)
}
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
  ])
)
