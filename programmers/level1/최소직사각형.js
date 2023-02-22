function solution(sizes) {
  let matrix = [],
    largeW = 0,
    largeH = 0
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) matrix.push([sizes[i][1], sizes[i][0]])
    else matrix.push(sizes[i])
    if (largeW < matrix[i][0]) largeW = matrix[i][0]
    if (largeH < matrix[i][1]) largeH = matrix[i][1]
  }
  return largeW * largeH
}
