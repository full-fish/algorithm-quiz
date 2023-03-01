function solution(x, y, n) {
  let result = []
  function DFS(count, sum) {
    if (sum === y) return result.push(count)
    else if (sum > y) {
      return -1
    } else {
      DFS(count + 1, sum + n)
      DFS(count + 1, sum * 2)
      DFS(count + 1, sum * 3)
    }
  }
  DFS(0, x)
  return result.length ? Math.min(...result) : -1
}
