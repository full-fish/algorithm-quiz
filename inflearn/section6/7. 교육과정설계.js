let str = 'CBDAGE'
let str2 = 'CGEADB'
let t = 'CBA'
function solution1(t, str) {
  let reg = new RegExp(t.split('').join('|'), 'g')
  return Boolean(str.match(reg).join('') === t)
}

//! 레퍼런스
function solution2(t, str) {
  let answer = 'YES'
  let queue = t.split('')
  for (let x of str) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO'
    }
  }
  if (queue.length > 0) return 'NO'
  return answer
}

console.log(solution1(t, str))
console.log(solution1(t, str2))

console.log(solution2(t, str))
console.log(solution2(t, str2))
