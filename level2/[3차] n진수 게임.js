function solution(n, t, m, p) {
  let acc = ''
  let result = ''
  for (let i = 0; true; i++) {
    acc += i.toString(n).toUpperCase()
    if (acc.length >= t * m) break
  }
  for (let i = p - 1; i < acc.length; i += m) {
    result += acc[i]
    if (result.length === t) break
  }
  return result
}
