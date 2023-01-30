function solution(score) {
  let sortNum = 0
  let result = new Array(score.length)
  score = score.map((ele, i) => [ele[0] + ele[1], i + 1])
  score.sort((a, b) => b[0] - a[0])
  for (let i = 0; i < score.length; i++) {
    result[score[i][1] - 1] = sortNum + 1
    if (i + 1 < score.length && score[i][0] === score[i + 1][0]) sortNum--
    else sortNum = i

    sortNum++
  }
  return result
}

function solution(score) {
  return score.map(el => {
    return score.filter(v => v[0] + v[1] > el[0] + el[1]).length + 1
  })
}
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ]),
)
