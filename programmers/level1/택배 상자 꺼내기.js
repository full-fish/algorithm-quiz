let n = 10
let w = 5
let num = 5
function solution(n, w, num) {
  let result = 0
  let mainHeight = Math.ceil(n / w)
  let targetHeight = Math.ceil(num / w)
  let lastBoxPosition = mainHeight % 2 ? (n % w) ? (n % w) : w : w - ((n % w) ? (n % w) : w) + 1
  let targetPosition = targetHeight % 2 ? (num % w) ? (num % w) : w : w - ((num % w) ? (num % w) : w) + 1
  const nRemain = n % w || n
  const numRemain = num % w || num
  console.log(mainHeight, targetHeight, lastBoxPosition, targetPosition, nRemain, numRemain);
  if (mainHeight % 2) {
    if (lastBoxPosition >= targetPosition) result++
  }
  else {
    if (lastBoxPosition <= targetPosition) result++
  }
  return result + mainHeight - targetHeight
}

console.log(solution(n, w, num));
// 13
// 12 11 10
// 7 8 9
// 6 5 4
// 1 2 3