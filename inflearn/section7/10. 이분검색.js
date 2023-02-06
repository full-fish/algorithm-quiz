function solution1(arr, target) {
  let lt = 0
  let rt = arr.length - 1
  let index = 0
  arr.sort((a, b) => a - b)
  while (1) {
    index = ~~((lt + rt) / 2)
    if (arr[index] === target) break
    else if (arr[index] > target) rt = index - 1
    else lt = index + 1
  }
  return index + 1
}
//! 레퍼런스
function solution2(arr, target) {
  let answer
  arr.sort((a, b) => a - b)
  let lt = 0,
    rt = arr.length - 1
  while (lt <= rt) {
    let mid = ~~((lt + rt) / 2)
    if (arr[mid] === target) {
      answer = mid + 1
      break
    } else if (arr[mid] > target) rt = mid - 1
    else lt = mid + 1
  }
  return answer
}
