function solution(numbers, hand) {
  let result = ''
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 0, 11],
  ]
  let nowL = [3, 0]
  let nowR = [3, 2]

  const check = (num, hand) => {
    const findLength = (num, finger) => {
      let numArr = findIndex(num)
      return Math.abs(finger[0] - numArr[0]) + Math.abs(finger[1] - numArr[1])
    }
    if (num === 1 || num === 4 || num === 7) {
      nowL = findIndex(num)
      return 'L'
    } else if (num === 3 || num === 6 || num === 9) {
      nowR = findIndex(num)
      return 'R'
    } else {
      if (findLength(num, nowL) > findLength(num, nowR)) {
        nowR = findIndex(num)
        return 'R'
      } else if (findLength(num, nowL) < findLength(num, nowR)) {
        nowL = findIndex(num)
        return 'L'
      } else {
        if (hand === 'right') {
          nowR = findIndex(num)
          return 'R'
        } else {
          nowL = findIndex(num)
          return 'L'
        }
      }
    }
  }

  const findIndex = num => {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].indexOf(num) !== -1) return [i, matrix[i].indexOf(num)]
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    result += check(numbers[i], hand)
  }
  return result
}
