function solution(t, p) {
  let count = 0
  for (let i = 0; i <= t.length - p.length; i++) {
    let temp = t.slice(i, i + p.length)
    if (parseInt(temp) <= parseInt(p)) count++
  }
  return count
}
