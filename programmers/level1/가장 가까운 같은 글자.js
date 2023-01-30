function solution(s) {
  let arr = s.split('')
  let obj = {}
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = i
      result.push(-1)
    } else {
      result.push(i - obj[arr[i]])
      obj[arr[i]] = i
    }
  }
  return result
}
