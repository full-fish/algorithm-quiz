function solution(hp) {
  let result = 0
  const damage = [5, 3, 1]
  for (let i = 0; i < damage.length; i++) {
    while (hp >= damage[i]) {
      result++
      hp -= damage[i]
    }
  }
  return result
}
