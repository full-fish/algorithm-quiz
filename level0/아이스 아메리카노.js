function solution(money) {
  let n = parseInt(money / 5500)
  return [n, money - n * 5500]
}
