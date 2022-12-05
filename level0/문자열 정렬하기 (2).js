let my_string = 'Bcad'
function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('')
}
console.log(solution(my_string))
