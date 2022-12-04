function solution(numbers) {
  let sum = numbers.reduce((acc, cur) => acc + cur)
  return sum / numbers.length
}
