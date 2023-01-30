let k = 80
let dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
]
function solution(k, dungeons) {
  let copyK = k
  let maxCount = 0
  let maxCountArr = []
  let n = dungeons.length
  let DFSArr = []
  function DFS(n, tempArr) {
    if (n === 0) {
      return DFSArr.push(tempArr.slice())
    } else {
      for (let i = 0; i < dungeons.length; i++) {
        if (!tempArr.includes(i)) DFS(n - 1, tempArr.concat(i)) // 순열
      }
    }
  }
  DFS(n, [])
  DFSArr.forEach(ele => {
    for (let i = 0; i < ele.length; i++) {
      if (dungeons[ele[i]][0] <= k) {
        maxCount++
        k -= dungeons[ele[i]][1]
      } else break
    }
    maxCountArr.push(maxCount)
    maxCount = 0
    k = copyK
  })
  return Math.max(...maxCountArr)
}
//
function solution(k, d) {
  const N = d.length
  const visited = new Array(N).fill(0)
  let ans = 0

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans)

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1
        dfs(k - d[j][1], cnt + 1)
        visited[j] = 0
      }
    }
  }

  dfs(k, 0)
  return ans
}
console.log(solution(k, dungeons))
