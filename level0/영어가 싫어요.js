function solution(numbers) {
  let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  for (let i = 0; i < numArr.length; i++) {
    numbers = numbers.replace(new RegExp(numArr[i], 'g'), i)
  }
  return parseInt(numbers)
}
