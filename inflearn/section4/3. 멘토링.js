let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]
//! 브루투포스 이용한 풀이
function solution1(arr) {
  let count = 0

  let obj = { 1: [], 2: [], 3: [], 4: [] }
  arr.forEach(arrEle => arrEle.forEach(ele => obj[ele].push(arrEle.indexOf(ele))))
  let objToArr = []
  for (let key in obj) objToArr.push(obj[key])
  for (let i = 0; i < objToArr.length; i++) {
    for (let j = 0; j < objToArr.length; j++) {
      if (i === j) continue
      let boo = true
      for (let k = 0; k < objToArr[0].length; k++) {
        if (objToArr[i][k] < objToArr[j][k]) {
          boo = false
          break
        }
      }
      if (boo) count++
    }
  }
  return count
}
//! 더 효율적인 풀이
function solution2(arr) {
  let count = 0
  let obj = { 1: [], 2: [], 3: [], 4: [] }
  for (let i = 1; i <= 4; i++) {
    arr.forEach(ele => {
      obj[i].push(ele.slice(ele.indexOf(i) + 1))
    })
    for (let j = 1; j <= 4; j++) {
      if (
        obj[i].every(ele => {
          return ele.includes(j)
        })
      )
        count++
    }
  }
  return count
}
//! 레퍼런스
function solution3(test) {
  let answer = 0
  m = test.length
  n = test[0].length
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0)
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s
          if (test[k][s] === j) pj = s
        }
        if (pi < pj) cnt++
      }
      if (cnt === m) answer++
    }
  }
  return answer
}
console.log(solution1(arr))
console.log(solution2(arr))
console.log(solution3(arr))
