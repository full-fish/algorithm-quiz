let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]
function solution1(arr) {
  let result = 0
  let visited = Array.from({ length: arr.length }, () => Array(arr.length).fill(0))
  let dx = [-1, 0, 1, -1, 1, -1, 0, 1]
  let dy = [1, 1, 1, 0, 0, -1, -1, -1]
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i][j] === 1 && visited[i][j] === 0) {
        let q = [[i, j]]
        while (q.length) {
          let [x, y] = q.shift()
          for (let i = 0; i < 8; i++) {
            const [shiftX, shiftY] = [x + dx[i], y + dy[i]]
            if (shiftX >= 0 && shiftY >= 0 && shiftX < len && shiftY < len && visited[shiftX][shiftY] === 0 && arr[shiftX][shiftY] === 1) {
              visited[shiftX][shiftY] = 1
              q.push([shiftX, shiftY])
            }
          }
        }
        result++
      }
    }
  }
  return result
}
//! 레퍼런스
function solution2(board) {
  let answer = 0
  let n = board.length
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1]
  let dy = [0, 1, 1, 1, 0, -1, -1, -1]
  let queue = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0
        queue.push([i, j])
        answer++
        while (queue.length) {
          let x = queue.shift()
          for (let k = 0; k < 8; k++) {
            let nx = x[0] + dx[k]
            let ny = x[1] + dy[k]
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0
              queue.push([nx, ny])
            }
          }
        }
      }
    }
  }
  return answer
}
