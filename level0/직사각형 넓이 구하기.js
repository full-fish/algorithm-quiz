function solution(dots) {
  dots.sort((a, b) => a[0] - b[0])
  return Math.abs((dots[1][1] - dots[0][1]) * (dots[2][0] - dots[1][0]))
}
solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
])
