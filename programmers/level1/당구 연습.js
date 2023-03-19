let m = 10
let n = 10
let startX = 1
let startY = 5
// let balls = [
//   [7, 7],
//   [2, 7],
//   [7, 3],
// ]
let balls = [[2, 5]]
function solution(m, n, startX, startY, balls) {
  let result = []
  balls.forEach(ball => {
    const [targetX, targetY] = ball
    let deX = Math.abs(startX - targetX)
    let deY = Math.abs(startY - targetY)
    // let o = n / m
    let a = Number.MAX_SAFE_INTEGER
    let b = Number.MAX_SAFE_INTEGER
    // let c = Number.MAX_SAFE_INTEGER
    if (deY === 0) {
      if (startX < targetX) a = (startX + targetX) ** 2
      else a = (m - startX + (m - targetX)) ** 2
    } else if (deX === 0) {
      if (startY < targetY) a = (startY + targetY) ** 2
      else a = (n - startY + (n - targetY)) ** 2
    }
    // if (-1 * o * startX + n === startY && -1 * o * targetX + n === targetY) {
    //   if (startX <= targetX) c = (targetX + startX) ** 2 + (n - startY + (n - targetY)) ** 2
    //   else c = (m - startX + (m - targetX)) ** 2 + (startY + targetY) ** 2
    // } else if (o * startX === startY && o * targetX === targetY) {
    //   if (startX <= targetX) c = (startX + targetX) ** 2 + (startY + targetY) ** 2
    //   else c = (m - startX + (m - targetX)) ** 2 + (n - startY + (n - targetY)) ** 2
    // }
    if (deX !== 0) b = Math.min(deX ** 2 + (n - startY + (n - targetY)) ** 2, deX ** 2 + (startY + targetY) ** 2)
    if (deY !== 0) b = Math.min(deY ** 2 + (m - startX + (m - targetX)) ** 2, deY ** 2 + (startX + targetX) ** 2, b)
    // result.push(Math.min(a, b, c))
    result.push(Math.min(a, b))
  })
  return result
}
// function solution(m, n, startX, startY, balls) {
//   const result = []

//   for (let i = 0; i < balls.length; i++) {
//     if (startX === balls[i][0] && startY < balls[i][1]) {
//       const x1 = -balls[i][0]
//       const distance1 = (startX - x1) ** 2 + (startY - balls[i][1]) ** 2

//       const x2 = 2 * m - balls[i][0]
//       const distance2 = (startX - x2) ** 2 + (startY - balls[i][1]) ** 2

//       const distance3 = (startY + balls[i][1]) ** 2

//       result.push(Math.min(distance1, distance2, distance3))
//       continue
//     }

//     if (startY === balls[i][1] && startX > balls[i][0]) {
//       const y1 = 2 * n - balls[i][1]
//       const distance1 = (startX - balls[i][0]) ** 2 + (startY - y1) ** 2

//       const y2 = -balls[i][1]
//       const distance2 = (startX - balls[i][0]) ** 2 + (startY - y1) ** 2

//       const x1 = 2 * m - startX - balls[i][0]
//       const distance3 = x1 ** 2

//       result.push(Math.min(distance1, distance2, distance3))
//       continue
//     }

//     const x1 = -balls[i][0]
//     const distance1 = (startX - x1) ** 2 + (startY - balls[i][1]) ** 2

//     const x2 = 2 * m - balls[i][0]
//     const distance2 = (startX - x2) ** 2 + (startY - balls[i][1]) ** 2

//     const y1 = 2 * n - balls[i][1]
//     const distance3 = (startX - balls[i][0]) ** 2 + (startY - y1) ** 2

//     const y2 = -balls[i][1]
//     const distance4 = (startX - balls[i][0]) ** 2 + (startY - y2) ** 2

//     result.push(Math.min(distance1, distance2, distance3, distance4))
//   }

//   return result
// }
console.log(solution(m, n, startX, startY, balls))
10, 10, 5, 9, [[5, 8]], [9]
10, 10, 5, 1, [[5, 2]], [9]
10, 10, 9, 5, [[8, 5]], [9]
10, 10, 1, 5, [[2, 5]], [9]
