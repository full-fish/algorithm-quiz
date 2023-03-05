let maps = ['X591X', 'X1X5X', 'X231X', '1XXX1']
function solution(maps) {
  let arr = maps.map(ele => ele.split(''))
  let result = []
  const lenX = arr.length
  const lenY = arr[0].length
  let visited = Array.from({ length: lenX }, () => Array(lenY).fill(0))
  let dx = [0, 1, 0, -1]
  let dy = [1, 0, -1, 0]
  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      if (arr[i][j] !== 'X' && visited[i][j] === 0) {
        let sum = 0
        let q = [[i, j]]
        visited[i][j] = 1
        while (q.length) {
          let [x, y] = q.shift()
          sum += Number(arr[x][y])
          for (let n = 0; n < 4; n++) {
            const [shiftX, shiftY] = [x + dx[n], y + dy[n]]
            if (shiftX >= 0 && shiftY >= 0 && shiftX < lenX && shiftY < lenY && visited[shiftX][shiftY] === 0 && arr[shiftX][shiftY] !== 'X') {
              visited[shiftX][shiftY] = 1
              q.push([shiftX, shiftY])
            }
          }
        }
        result.push(sum)
      }
    }
  }
  return result.length ? result.sort((a, b) => a - b) : [-1]
}
console.log(solution(maps))
