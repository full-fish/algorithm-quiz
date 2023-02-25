function solution(n) {
  let str = ''
  while (n > 3) {
    str += n % 3
    n = parseInt(n / 3)
  }
  n += str
  return n.replace(/3/, '4')
}
console.log(solution(6))
