let s = 'a'
function solution(s) {
  let min = Number.MAX_SAFE_INTEGER
  for (let n = 1; n <= Math.ceil(s.length / 2); n++) {
    let str = ''
    let temp = ''
    let count = 1
    for (let i = 0; i <= s.length; i += n) {
      const part = s.slice(i, i + n)
      if (temp === '') temp = part
      else if (temp === part) count++
      else {
        count === 1 ? (str += temp) : (str += `${count}${temp}`)
        temp = part
        count = 1
      }
    }
    str += temp
    if (min > str.length) min = str.length
  }
  return min
}
console.log(solution(s))
