function solution(dots) {
  dots.sort((a, b) => a[0] - b[0])
  console.log(dots)
  let arr = []
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      arr.push([(dots[i][0] - dots[j][0]) / (dots[i][1] - dots[j][1])])
    }
  }
  console.log(arr)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] === arr[j][0]) return 1
    }
  }
  return 0
}
let dots = [
  [3, 5],
  [4, 1],
  [5, -3],
  [5, 10],
]
console.log(solution(dots))
console.log(-1 / 4)
