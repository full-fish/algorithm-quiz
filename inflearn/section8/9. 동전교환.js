//! 아래 type과 targetValue가 반례임
let type = [1, 5, 7]
let targetValue = 10
function solution1(type, targetValue) {
  let result = 0
  type = type.sort((a, b) => b - a)
  function DFS(targetValue, count) {
    if (targetValue < 0) return
    if (targetValue === 0) {
      result = count
      return
    } else {
      for (let i = 0; i < type.length; i++) {
        DFS(targetValue - type[i], count + 1)
      }
    }
  }
  DFS(targetValue, 0)
  return result
}
//! 레퍼런스 이렇게 해야함 bool만들면 안되고 모든걸 순회해봐야함
function solution2(type, targetValue) {
  let result = Number.MAX_SAFE_INTEGER
  let n = type.length
  function DFS(count, sum) {
    if (sum > targetValue) return
    if (count >= result) return
    if (sum === targetValue) {
      result = Math.min(result, count)
    } else {
      for (let i = 0; i < n; i++) {
        DFS(count + 1, sum + type[i])
      }
    }
  }
  DFS(0, 0)
  return result
}
console.log(solution1(type, targetValue))
console.log(solution2(type, targetValue))
