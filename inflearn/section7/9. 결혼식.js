let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]
function solution1(arr) {
  let result = []
  let time = 0
  arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
    time = arr[i][0]
    for (let j = 0; j < result.length; j++) {
      if (result[j][1] <= time) result.shift()
      else break
    }
  }
  return result.length
}
//! 레퍼런스 아이디어 각 요소마다 s나 e를 달아놓고 시간순서로 sort후 s면 ++ e면 --
function solution2(times) {
  let answer = Number.MIN_SAFE_INTEGER
  let T_line = []
  for (let x of times) {
    T_line.push([x[0], 's'])
    T_line.push([x[1], 'e'])
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
    else return a[0] - b[0]
  })

  let cnt = 0
  for (let x of T_line) {
    if (x[1] === 's') cnt++
    else cnt--
    answer = Math.max(answer, cnt)
  }
  return answer
}
