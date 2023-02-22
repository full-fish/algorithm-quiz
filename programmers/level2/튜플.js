function solution(s) {
  let obj = {}
  let resultArr = []
  s = s.replace(/[{}]/g, '').split(',')
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) obj[s[i]]++
    else obj[s[i]] = 1
  }

  let arr = Object.entries(obj)
  arr.sort((a, b) => b[1] - a[1])
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(parseInt(arr[i][0]))
  }
  return resultArr
}
