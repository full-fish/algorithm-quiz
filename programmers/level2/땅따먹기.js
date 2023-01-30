function solution(land) {
  let preIndex = -1
  let result = 0
  let arr = solution2(land.length)
  let realMax = 0
  for (let i = 0; i < arr.length; i++) {
    land = [land[0], land[1], land[2]]
    land.forEach(landEle => {
      let max = -1
      if (preIndex !== landEle.indexOf(Math.max(...landEle))) max = Math.max(...landEle)
      else {
        landEle[preIndex] = -1
        max = Math.max(...landEle)
      }
      if (preIndex !== landEle.indexOf(max)) {
        result += max
      }
      preIndex = landEle.indexOf(max)
    })
    if (realMax < result) realMax = result
  }
  return realMax
}
function solution2(n) {
  let answer = []
  let N = n
  function DFS(n, tempArr) {
    if (n === 0) {
      return answer.push(tempArr.slice())
    } else {
      for (let i = 0; i < N; i++) {
        // DFS(n - 1, tempArr.concat(i)) // 중복순열
        if (!tempArr.includes(i)) DFS(n - 1, tempArr.concat(i)) // 순열
      }
    }
  }
  DFS(n, [])
  return answer
}
console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
)
