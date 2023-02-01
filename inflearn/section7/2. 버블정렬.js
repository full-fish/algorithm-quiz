function solution1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapsCount = 0
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapsCount++
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // temp안쓰고 구조분해할당으로 이렇게 해도 됨
      }
    }
    if (swapsCount === 0) break
  }
  return arr
}
//! 레퍼런스 내꺼가 더 나음
function solution2(arr) {
  let answer = arr
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return answer
}
