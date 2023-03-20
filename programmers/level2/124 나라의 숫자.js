function solution(n) {
  let str = ''
  while (n >= 3) {
    let remainder = n % 3
    n = parseInt(n / 3)
    if (remainder === 0) {
      str = 4 + str
      n -= 1
    } else str = remainder + str
  }
  n += str
  return n.replace(/^0*/, '')
}
//! 다른 사람 코드
function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3]
}
