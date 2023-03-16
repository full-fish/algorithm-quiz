let m = 10
let n = 10
let startX = 3
let startY = 7
let balls = [
  [7, 7],
  [2, 7],
  [7, 3],
]
function solution(m, n, startX, startY, balls) {
  let result = []
  balls.forEach(ball => {
    const [targetX, targetY] = ball
    let deX = Math.abs(startX - targetX)
    let deY = Math.abs(startY - targetY)
    if (deX >= deY) {
      if (startY + targetY >= n) result.push(deX ** 2 + (2 * n - startY - targetY) ** 2)
      else result.push(deX ** 2 + (startY + targetY) ** 2)
    } else {
      if (startX + targetX >= m) result.push(deY ** 2 + (2 * n - startX - targetX) ** 2)
      else result.push(deY ** 2 + (startX + targetX) ** 2)
    }
  })
  return result
}
console.log(solution(m, n, startX, startY, balls))
