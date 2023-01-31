let s = 'bacaAacba'
let t = 'abc'

function solution1(s, t) {
  let result = 0
  let tObj = {}
  let obj = {}
  for (let x of t) {
    x in tObj ? tObj[x]++ : (tObj[x] = 1)
  }
  for (let i = 0; i < t.length; i++) {
    s[i] in obj ? obj[s[i]]++ : (obj[s[i]] = 1)
  }
  for (let i = t.length; i < s.length; i++) {
    if (same(tObj, obj)) result++
    s[i] in obj ? obj[s[i]]++ : (obj[s[i]] = 1)
    obj[s[i - t.length]]--
    if (obj[s[i - t.length]] === 0) delete obj[s[i - t.length]]
  }
  if (same(tObj, obj)) result++
  return result
}
function same(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) return false
  }
  return true
}
//! 레퍼런스
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false
  }
  return true
}
function solution2(s, t) {
  let answer = 0
  let tH = new Map()
  let sH = new Map()
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1)
    else tH.set(x, 1)
  }
  let len = t.length - 1
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1)
    else sH.set(s[i], 1)
  }
  let lt = 0
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1)
    else sH.set(s[rt], 1)
    if (compareMaps(sH, tH)) answer++
    sH.set(s[lt], sH.get(s[lt]) - 1)
    if (sH.get(s[lt]) === 0) sH.delete(s[lt])
    lt++
  }
  return answer
}
