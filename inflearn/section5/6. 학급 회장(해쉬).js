let s = 'BACBACCACCBDEDE'
function solution1(s) {
  let result = ''
  let obj = {}
  let max = 0
  for (let x of s) {
    x in obj ? obj[x]++ : (obj[x] = 1)
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key]
      result = key
    }
  }
  return result
}
//! 레퍼런스
function solution2(s) {
  let answer
  let sH = new Map()
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1)
    else sH.set(x, 1)
  }
  let max = Number.MIN_SAFE_INTEGER
  for (let [key, val] of sH) {
    if (val > max) {
      max = val
      answer = key
    }
  }
  return answer
}
console.log(solution1(s))
console.log(solution2(s))
