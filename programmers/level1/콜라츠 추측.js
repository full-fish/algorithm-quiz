function solution(num) {
  var answer = 0
  let count = 0
  while (num !== 1 && answer <= 499) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num = num * 3 + 1
    }
    answer += 1
  }
  if (answer === 500) answer = -1
  return answer
}
