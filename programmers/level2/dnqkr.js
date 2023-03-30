let k = 5
let ranges = [
  [0, 0],
  [0, -1],
  [2, -3],
  [3, -3],
]
function solution(k, ranges) {
  let arr = []
  let x = 0
  let sum = 0
  let gArr = []
  while (k !== 1) {
    arr.push([x, k])
    k = k % 2 ? k * 3 + 1 : k / 2
    x++
  }
  arr.push([x, k])
  for (let i = 0; i < arr.length - 1; i++) {
    const a = (arr[i + 1][1] - arr[i][1]) / (arr[i + 1][0] - arr[i][0])
    const c = -(arr[i][0] * a) + arr[i][1]
    let tt = (a / 2) * arr[i + 1][0] ** 2 + c * arr[i + 1][0] - ((a / 2) * arr[i][0] ** 2 + c * arr[i][0])
    sum += tt
    console.log('tt', tt)
  }
  console.log(sum)
  return arr
}
console.log(solution(k, ranges))
