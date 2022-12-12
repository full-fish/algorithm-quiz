function solution(sides) {
  sides.sort((a, b) => a - b)
  return sides[0] * 2 - 1
}
function solution(sides) {
  return Math.min(...sides) * 2 - 1
}
console.log(solution([11, 7]))
