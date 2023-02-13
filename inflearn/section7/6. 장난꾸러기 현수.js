let a = [120, 125, 152, 130, 135, 135, 143, 127, 160]
let b = [120, 130, 150, 150, 130, 150]
let c = [120, 130, 125, 135, 143, 160]
function solution1(a) {
  let result = []
  let index = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= a[i + 1]) {
      index = i
      result.push(i + 1)
      break
    }
  }
  for (let i = a.length - 1; i >= index; i--) {
    if (a[i] <= a[i - 1]) {
      result.push(i + 1)
      break
    }
  }
  return result
}
//! 레퍼런스 아이디어 좋음
function solution2(arr) {
  let answer = []
  let sortArr = arr.slice()
  sortArr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1)
  }
  return answer
}
console.log(solution1(d))
console.log(solution2(d))
