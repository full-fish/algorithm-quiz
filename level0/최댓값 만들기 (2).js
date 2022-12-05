function solution(numbers) {
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] > max) max = numbers[i] * numbers[j]
    }
  }
  return max
}
