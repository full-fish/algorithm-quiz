let my_string = 'hello'
let num1 = 1
let num2 = 2
function solution(my_string, num1, num2) {
  if (num1 > num2) [num1, num2] = [num2, num1]
  let temp = my_string[num2]
  let my_string_arr = my_string.split('')
  temp = my_string_arr.splice(num1, 1, temp)[0]
  my_string_arr.splice(num2, 1, temp)
  return my_string_arr.join('')
}
console.log(solution(my_string, num1, num2))
