function solution(chicken) {
  let result = 0
  while (chicken >= 10) {
    result += ~~(chicken / 10)
    chicken = ~~(chicken / 10) + (chicken % 10)
  }
  return result
}
