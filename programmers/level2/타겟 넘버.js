let numbers = [1, 1, 1, 1, 1]
let target = 3
function solution(numbers, target) {
  let result = 0
  for (let i = 0; i < 2 ** numbers.length; i++) {
    if (numbers.reduce((acc, cur) => acc + cur) === target) result++
    numbers[numbers.length - 1] *= -1
    for (let j = numbers.length - 1; j > 0; j--) {
      if (numbers[j] > 0) numbers[j - 1] *= -1
      else break
    }
  }
  return result
}
function solution(numbers, target) {
  let answer = 0
  getAnswer(0, 0)
  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x])
      getAnswer(x + 1, value - numbers[x])
    } else {
      if (value === target) {
        answer++
      }
    }
  }
  return answer
}
console.log(solution(numbers, target))
//111  11-1  1-11  1-1-1   -111  -11-1  -1-11 -1-1-1
