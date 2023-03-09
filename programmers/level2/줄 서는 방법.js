function solution1(n, k) {
  let result = []
  let ch = Array.from({ length: n }, () => 0)
  let tmp = Array.from({ length: n }, () => 0)
  let c = 1
  function DFS(L) {
    if (c > k) {
      return
    }
    if (L === n) {
      if (c === k) result = tmp.slice()
      c++
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1
          tmp[L] = i + 1
          DFS(L + 1)
          ch[i] = 0
        }
      }
    }
  }
  DFS(0)
  return result
}
function solution(n, k) {
  let arr = [...new Array(n).keys()].map(e => e + 1)
  let result = []
  for (let i = n - 1; i > 0; i--) {
    if (i === 1) {
      if (k % 2 === 1) {
        result.push(...arr)
        break
      } else {
        result.push(arr.pop())
        result.push(arr.pop())
        break
      }
    }
    result.push(...arr.splice(Math.ceil(k / factorial(i)) - 1, 1))
    // k = Math.floor(k / factorial(i))
    console.log(arr)
  }
  return result
}
function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}
for (let i = 1; i <= 24; i++) {
  console.log(i, solution(4, i))
}
