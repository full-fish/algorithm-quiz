function solution(sides) {
  sides.sort((a, b) => a - b)
  const [a, b, c] = sides
  return a + b > c ? 1 : 2
}
