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
  let gArr = []
  while (k !== 1) {
    arr.push([x, k])
    k = k % 2 ? k * 3 + 1 : k / 2
    x++
  }
  arr.push([x, k])
  for (let k = 0; k < ranges.length; k++) {
    const [s, e] = ranges[k]
    let sum = 0
    for (let i = 0 + s; i < arr.length - 1 + e; i++) {
      const a = (arr[i + 1][1] - arr[i][1]) / (arr[i + 1][0] - arr[i][0])
      const c = -(arr[i][0] * a) + arr[i][1]
      let part = (a / 2) * arr[i + 1][0] ** 2 + c * arr[i + 1][0] - ((a / 2) * arr[i][0] ** 2 + c * arr[i][0])
      sum += part
    }
    if (s > arr.length - 1 + e) sum = -1
    gArr.push(sum)
  }
  return gArr
}
