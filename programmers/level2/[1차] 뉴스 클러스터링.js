function solution(str1, str2) {
  let str1Arr = splitStr(str1)
  let str2Arr = splitStr(str2)
  if (str1Arr.length === 0 && str2Arr.length === 0) return 65536
  const str2ArrLength = str2Arr.length
  let count = 0
  for (let i = 0; i < str1Arr.length; i++) {
    for (let j = 0; j < str2Arr.length; j++) {
      if (str1Arr[i] === str2Arr[j]) {
        count++
        str2Arr.splice(j, 1)
        break
      }
    }
  }
  return parseInt((count / (str1Arr.length + str2ArrLength - count)) * 65536)
}
function splitStr(str) {
  let arr = []
  str = str.toLowerCase()
  for (let i = 0; i < str.length - 1; i++) {
    if (!/[^a-z]/g.test(str.slice(i, i + 2))) arr.push(str.slice(i, i + 2))
  }
  return arr
}
