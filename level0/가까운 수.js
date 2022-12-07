function solution(array, n) {
  let min = Number.MAX_SAFE_INTEGER
  let result = 0
  array.sort((a, b) => a - b)
  array.forEach((ele) => {
    if (Math.abs(ele - n) < min) {
      min = Math.abs(ele - n)
      result = ele
    }
  })
  return result
}
