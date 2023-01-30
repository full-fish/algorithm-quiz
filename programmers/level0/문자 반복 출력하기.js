function solution(my_string, n) {
  let result = ''
  for (const ele of my_string) {
    for (let i = 0; i < n; i++) {
      result += ele
    }
  }
  return result
}
