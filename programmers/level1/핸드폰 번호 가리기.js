function solution(phone_number) {
  var answer = ''
  let starCount = ''
  let lastNum = ''
  for (let i = 0; i < phone_number.length - 4; i++) {
    starCount += '*'
  }
  lastNum = phone_number.slice(phone_number.length - 4, phone_number.length)

  answer = starCount + lastNum
  return answer
}
