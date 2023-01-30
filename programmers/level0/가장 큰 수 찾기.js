function solution(array) {
  let result = [0, 0]
  array.forEach((ele, i) => (ele > result[0] ? (result = [ele, i]) : ''))
  return result
}
