function solution(numbers) {
  var answer = -1
  answer = 0
  for (let i = 0; i < numbers.length; i++) {
    //9로 해도 되지만 효울적인 연산을 위해 길이만큼만
    answer += numbers[i]
  }
  return 45 - answer
}
