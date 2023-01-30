function solution(k, score) {
  let kArr = []
  let result = []
  for (let i = 0; i < score.length; i++) {
    if (kArr.length < k || kArr[0] < score[i]) {
      if (kArr.length === k) kArr.shift()
      kArr.push(score[i])
      kArr.sort((a, b) => a - b)
    }
    result.push(Math.min(...kArr))
  }
  return result
}
