let numbers = [3, 31, 34, 5, 9]
function solution(numbers) {
  let result = numbers
    .map(ele => String(ele))
    .sort((a, b) => (a + b > b + a ? -1 : a + b < b + a ? 1 : 0))
    .join('')
  if (/^0+$/.test(result)) return '0'
  return result
}
console.log(solution(numbers))
