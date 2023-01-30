function solution(quiz) {
  return quiz.map(ele => computed(ele))
}
function computed(ele) {
  let arr = ele.match(/\d+|-\d+|\+|\-/g)
  let sum = parseInt(arr[0])
  for (let i = 1; i < arr.length - 2; i += 2) {
    if (arr[i] === '+') sum += parseInt(arr[i + 1])
    else sum -= parseInt(arr[i + 1])
  }
  return sum === parseInt(arr[arr.length - 1]) ? 'O' : 'X'
}
solution('-3 - 4 + 5= -3')
