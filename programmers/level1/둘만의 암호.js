let s = 'y'
let skip = 'az'
let index = 1
function solution(s, skip, index) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    let temp = s[i].charCodeAt()
    for (let j = 0; j < index; j++) {
      temp += 1
      while (temp > 122) temp -= 26
      while (skip.includes(String.fromCharCode(temp))) {
        temp += 1
        while (temp > 122) temp -= 26
      }
    }
    result += String.fromCharCode(temp)
  }
  return result
}
//! 다른 사람 코드
function solution(s, skip, index) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].filter(
    c => !skip.includes(c)
  )
  return s
    .split('')
    .map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join('')
}
console.log(solution(s, skip, index))
