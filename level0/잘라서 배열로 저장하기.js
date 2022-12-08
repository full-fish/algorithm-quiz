let my_str = 'abc1Addfggg4556b'
function solution(my_str, n) {
  let result = []
  let my_str_arr = my_str.split('')
  while (my_str_arr.length >= 1) {
    result.push(my_str_arr.splice(0, n).join(''))
  }
  return result
}

function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'))
}
console.log(solution(my_str, 6))
