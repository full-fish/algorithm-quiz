function solution(k, m, score) {
  let result = 0
  score.sort((a, b) => a - b)
  while (score.length >= m) {
    // let arr = score.slice(-m)
    // result += arr[0] * m
    // score = score.slice(0, score.length - m)
    let arr = []
    for (let i = 0; i < m; i++) {
      arr.push(score.pop())
    }
    result += arr[m - 1] * m
  }
  return score
}
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
