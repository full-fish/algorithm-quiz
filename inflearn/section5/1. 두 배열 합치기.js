let arr1 = [1, 3, 5]
let arr2 = [2, 3, 6, 7, 9]

//! 메소드 사용
function solution1(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b)
}

//! 투포인터 사용 원본배열 비보존
function solution2(arr1, arr2) {
  let p1 = 0
  let p2 = 0
  while (p2 < arr2.length) {
    arr1[p1] <= arr2[p2] ? arr1.splice(p1 + 1, '', arr2[p2]) : arr1.splice(p1, '', arr2[p2])
    p1 += 2
    p2++
  }
  return arr1
}

//! 레퍼런스
function solution3(arr1, arr2) {
  let answer = []
  let n = arr1.length
  let m = arr2.length
  let p1 = (p2 = 0)
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++])
    else answer.push(arr2[p2++])
  }
  while (p1 < n) answer.push(arr1[p1++])
  while (p2 < m) answer.push(arr2[p2++])
  return answer
}
console.log(solution1(arr1, arr2))
console.log(solution2(arr1, arr2))
console.log(solution3(arr1, arr2))
