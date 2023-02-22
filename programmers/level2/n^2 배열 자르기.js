function solution(n, left, right) {
  let arr = []
  let remainder = left % n
  for (let i = parseInt(left / n); i < n ** n; i++) {
    let count = 1
    for (let j = i + 1; j <= n; count > j ? j++ : (j = j)) {
      arr.push(j)
      count++
      if (arr.length > right - left + remainder) return arr.slice(left - parseInt(left / n) * n, left - parseInt(left / n) * n + right - left + 1)
    }
  }
}
