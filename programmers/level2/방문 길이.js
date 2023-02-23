let dirs = 'ULURRDLLU'
function solution(dirs) {
  let now = [0, 0]
  let obj = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] }
  let check = []
  let result = 0
  for (let i = 0; i < dirs.length; i++) {
    const nextX = now[0] + obj[dirs[i]][0]
    const nextY = now[1] + obj[dirs[i]][1]
    const dis = now.join('') + `${nextX}${nextY}`
    if (nextX <= 5 && nextY <= 5 && nextX >= -5 && nextY >= -5) {
      if (!check.includes(dis.split('').reverse().join('')) && !check.includes(dis)) {
        check.push(dis)
        result++
      }
      now = [nextX, nextY]
    }
  }
  return result
}
