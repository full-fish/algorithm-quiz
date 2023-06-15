function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)
}
