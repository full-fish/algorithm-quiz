function solution(arr) {
  var answer = []
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  arr.splice(arr.indexOf(min), 1)
  if (arr.length === 0) {
    return [-1]
  }
  return arr
}
