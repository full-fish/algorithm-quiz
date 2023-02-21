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
let land = [
  [1, 2, 6, 7],
  [2, 3, 10, 8],
  [1, 3, 9, 4],
  [7, 11, 9, 4],
]
function solution3(land) {
  const dpArr = land[0]
  const position = [0, 1, 2, 3]
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      const copyArr = land[i].slice()
      copyArr.splice(position[j], 1)
      const max = Math.max(...copyArr)
      position[j] = land[i].indexOf(max)
      dpArr[j] += max
    }
    console.log(dpArr, position)
  }
  return Math.max(...dpArr)
}
//! 이거임
function solution4(land) {
  let dpArr = land[0]
  for (let i = 1; i < land.length; i++) {
    let tempArr = new Array(4)
    for (let j = 0; j < land[0].length; j++) {
      const copyDpArr = dpArr.slice()
      copyDpArr.splice(j, 1)
      const max = Math.max(...copyDpArr)
      tempArr[j] = max + land[i][j]
    }
    dpArr = tempArr
  }
  return Math.max(...dpArr)
}
console.log(solution4(land))
// console.log(
//   solution3([
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1],
//   ])
// )
