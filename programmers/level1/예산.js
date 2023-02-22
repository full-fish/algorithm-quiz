function solution(d, budget) {
  var answer = 0
  let count = 0
  d.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; 0 <= budget; i++) {
    budget -= d[i]
    if (budget >= 0) count++
  }
  return count
}
