function solution(a, b, n) {
  let result = 0
  while (n >= a) {
    const get = ~~(n / a) * b
    result += get
    n = (n % a) + get
  }
  return result
}
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
console.log(solution(3, 1, 20))
