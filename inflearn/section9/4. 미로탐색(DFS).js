let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
]

function solution1(arr) {
  const len = arr.length
  const visited = Array.from({ length: len }, () => Array(len).fill(0))
  let result = 0
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  function DFS(x, y) {
    if (x === len - 1 && y === len - 1) return result++
    else {
      visited[x][y] = 1
      for (let i = 0; i < 4; i++) {
        const [shiftX, shiftY] = [x + dx[i], y + dy[i]]
        if (shiftX >= 0 && shiftY >= 0 && shiftX < len && shiftY < len && visited[shiftX][shiftY] === 0 && arr[shiftX][shiftY] === 0) DFS(shiftX, shiftY)
      }
      visited[x][y] = 0
    }
  }
  DFS(0, 0)
  return result
}
//! 레퍼런스 굳이 visited만들 필요는 없었음
function solution2(board) {
  let answer = 0
  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k]
        let ny = y + dy[k]
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1
          DFS(nx, ny)
          board[nx][ny] = 0
        }
      }
    }
  }
  board[0][0] = 1
  DFS(0, 0)
  return answer
}
console.log(solution1(arr))
console.log(solution2(arr))
