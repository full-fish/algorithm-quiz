function solution(n) {
  let result = 1
  while (true) {
    if ((result * 6) % n === 0) return result
    result++
  }
}
