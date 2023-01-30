let str1 = 'AbaAeCe'
let str2 = 'baeeACA'
let str3 = 'abaCC'
let str4 = 'Caaab'
function solution1(str1, str2) {
  let obj = {}
  for (let x of str1) {
    x in obj ? obj[x]++ : (obj[x] = 1)
  }
  for (let x of str2) {
    if (!(x in obj) || obj[x] === 0) return 'NO'
    obj[x]--
  }
  return 'YES'
}
//! 레퍼런스
function solution2(str1, str2) {
  let answer = 'YES'
  let sH = new Map()
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1)
    else sH.set(x, 1)
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO'
    sH.set(x, sH.get(x) - 1)
  }
  return answer
}
console.log(solution1(str1, str2))
console.log(solution2(str1, str2))
console.log(solution1(str3, str4))
console.log(solution2(str3, str4))
