function solution(k, tangerine) {
  let result = 0
  let obj = {}
  tangerine.forEach(ele => {
    ele in obj ? obj[ele]++ : (obj[ele] = 1)
  })
  let arr = Object.entries(obj).sort((a, b) => b[1] - a[1])
  for (let i = 0; i < arr.length; i++) {
    result++
    if (k > arr[i][1]) k -= arr[i][1]
    else break
  }
  return result
}
