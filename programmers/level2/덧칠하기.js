function solution(n, m, section) {
  let arr = new Array(n + 1).fill(1)
  let count = 0
  let t = 0
  let emptyLen = section.length
  for (let i = 0; i < emptyLen; i++) {
    arr[section[i]] = 0
  }
  while (emptyLen > 0) {
    if (arr[t] === 0) {
      for (let i = t; i < t + m; i++) {
        if (arr[i] === 0) emptyLen--
        arr[i]++
      }
      t += m
      count++
    } else t++
  }
  return count
}
