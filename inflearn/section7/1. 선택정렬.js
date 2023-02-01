let arr = [13, 5, 11, 7, 23, 15]
function solution1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j
    }
    if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
//! 레퍼런스
function solution2(arr) {
  let answer = arr
  for (let i = 0; i < arr.length; i++) {
    let idx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j
    }
    ;[arr[i], arr[idx]] = [arr[idx], arr[i]]
  }
  return answer
}

console.log(solution1(arr))
console.log(solution2(arr))
