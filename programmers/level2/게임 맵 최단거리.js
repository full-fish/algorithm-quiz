let maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
]
function solution(maps) {
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  const n = maps.length - 1
  const m = maps[0].length - 1
  let ch = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))
  ch[0][0] = 1
  let q = [[0, 0]]
  while (q.length) {
    let now = q.shift()
    for (let i = 0; i < 4; i++) {
      const nextX = now[0] + dx[i]
      const nextY = now[1] + dy[i]
      if (
        nextX >= 0 &&
        nextX <= n &&
        nextY >= 0 &&
        nextY <= m &&
        maps[nextX][nextY] !== 0 &&
        maps[now[0]][now[1]] >= maps[nextX][nextY] &&
        ch[nextX][nextY] === 0
      ) {
        ch[nextX][nextY] = 1
        q.push([nextX, nextY])
        maps[nextX][nextY] = maps[now[0]][now[1]] + 1
        if (nextX === n && nextY === m) {
          return maps[n][m]
        }
      }
    }
  }
  return -1
}
console.log(solution(maps))
