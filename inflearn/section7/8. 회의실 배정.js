let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
]
function solution1(arr) {
  let newArr = arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  let max = 0
  console.log('newArr', newArr)
  for (let n = 0; n < newArr.length; n++) {
    let count = 0
    let time = 0
    for (let i = n; i < newArr.length; i++) {
      if (newArr[i][0] >= time) {
        count++
        time = newArr[i][1]
      }
    }
    if (count > max) max = count
  }
  return max
}
//! 레퍼런스 아이디어! 그냥 끝나는 시간으로 sort해버리고 시작함
function solution2(meeting) {
  let answer = 0
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
  })
  console.log('meeting', meeting)
  let et = 0
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++
      et = x[1]
    }
  }
  return answer
}
console.log(solution1(arr))
console.log(solution2(arr))
