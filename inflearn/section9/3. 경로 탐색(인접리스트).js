let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]
let n = 5
function solution1(n, arr) {
  let obj = {}
  let result = 0
  arr.forEach(ele => {
    if (!(ele[0] in obj)) obj[ele[0]] = [ele[1]]
    else obj[ele[0]].push(ele[1])
  })
  let visited = new Array(n).fill(0)
  function DFS(i) {
    if (i === n) result++
    else {
      for (let j = 0; j < obj[i].length; j++) {
        if (visited[obj[i][j] - 1] === 0) {
          visited[obj[i][j] - 1] = 1
          DFS(obj[i][j])
          visited[obj[i][j] - 1] = 0
        }
      }
    }
  }
  visited[0] = 1
  DFS(1)
  return result
}
function solution2(n, arr) {
  let obj = {}
  let result = 0
  arr.forEach(ele => {
    if (!(ele[0] in obj)) obj[ele[0]] = [ele[1]]
    else obj[ele[0]].push(ele[1])
  })
  let visited = new Array(n + 1).fill(0)
  function DFS(i) {
    if (i === n) result++
    else {
      for (let j = 0; j < obj[i].length; j++) {
        if (visited[obj[i][j]] === 0) {
          visited[obj[i][j]] = 1
          DFS(obj[i][j])
          visited[obj[i][j]] = 0
        }
      }
    }
  }
  visited[1] = 1
  DFS(1)
  return result
}
//! 레퍼런스
function solution3(n, arr) {
  let answer = 0
  let graph = Array.from(Array(n + 1), () => Array())
  let ch = Array.from({ length: n + 1 }, () => 0)
  let path = []
  for (let [a, b] of arr) {
    graph[a].push(b)
  }
  console.log(graph)
  function DFS(v) {
    if (v === n) {
      answer++
      console.log(path)
    } else {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          path.push(nv)
          ch[nv] = 1
          DFS(nv)
          ch[nv] = 0
          path.pop()
        }
      }
    }
  }
  ch[1] = 1
  path.push(1)
  DFS(1)
  return answer
}
console.log(solution1(n, arr))
console.log(solution2(n, arr))
console.log(solution3(n, arr))
