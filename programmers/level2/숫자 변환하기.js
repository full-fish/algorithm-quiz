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
//! 개선
function solution(x, y, n) {
  let min = Number.MAX_SAFE_INTEGER
  let obj = {}
  function DFS(count, sum) {
    if (!Number.isInteger(sum)) return -1
    if (!(sum in obj) || (sum in obj && obj[sum] > count)) obj[sum] = count
    if (sum in obj && obj[sum] < count) return -1
    if (sum === x && min > count) min = count
    else if (sum < x) {
      return -1
    } else {
      DFS(count + 1, sum / 3)
      DFS(count + 1, sum / 2)
      DFS(count + 1, sum - n)
    }
  }
  DFS(0, y)
  return min === Number.MAX_SAFE_INTEGER ? -1 : min
}
