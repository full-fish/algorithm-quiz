let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]

function solution(triangle) {
  for (let i = triangle.length - 1; i > 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i - 1][j] = Math.max(triangle[i - 1][j] + triangle[i][j], triangle[i - 1][j] + triangle[i][j + 1])
    }
  }
  return triangle[0][0]
}
console.log(solution(triangle));

