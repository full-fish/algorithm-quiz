function solution(lines) {
  let obj = {}
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      if (obj[j + 0.5] === undefined) obj[j + 0.5] = 1
      else obj[j + 0.5]++
    }
  }
  return Object.values(obj).filter(ele => ele >= 2).length
}
console.log(
  solution([
    [0, 2],
    [-3, -1],
    [-2, 1],
  ])
)
