let a = [1, 2, 3, -3, -2, 5, 6, -6]
function solution1(arr) {
  let result = [[], []]
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? result[0].push(arr[i]) : result[1].push(arr[i])
  }
  return result.flat()
}
//! 레퍼런스
function solution2(arr) {
  let answer = arr
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return answer
}
//! 레퍼런스
function solution3(arr) {
  let answer = []
  for (let x of arr) {
    if (x < 0) answer.push(x)
  }
  for (let x of arr) {
    if (x > 0) answer.push(x)
  }
  return answer
}
