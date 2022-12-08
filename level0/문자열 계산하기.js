function solution(my_string) {
  let arr = my_string.match(/\d+|\+|\-/g)
  let result = parseInt(arr[0])
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === '+') result += parseInt(arr[i + 1])
    else result -= parseInt(arr[i + 1])
  }
  return result
}
console.log(solution('31 + 4 - 1'))
