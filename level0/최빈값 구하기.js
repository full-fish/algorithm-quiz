function solution(array) {
  if (array.length === 1) return array[0]
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    if (array[i] in obj) obj[array[i]]++
    else obj[array[i]] = 1
  }
  if (Object.keys(obj).length === 1) {
    return array[0]
  }
  let arr = Object.entries(obj).sort((a, b) => b[1] - a[1])
  return arr[0][1] === arr[1][1] ? -1 : parseInt(arr[0][0])
}
console.log(solution([1, 1]))
