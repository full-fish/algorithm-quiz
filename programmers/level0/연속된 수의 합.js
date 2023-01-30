function solution(num, total) {
  let result = []
  console.log(Math.ceil(total / num - Math.floor(num / 2)))
  console.log(Math.floor(total / num + Math.floor(num / 2)))
  if (num % 2 === 1) {
    let middle = total / num
    for (let i = 0; i < num; i++) {
      result.push(middle - ~~(num / 2) + i)
    }
  } else {
    let doubleMiddle = total / (num / 2)
    let middle = ~~(doubleMiddle / 2)
    console.log(doubleMiddle, middle, num)
    for (let i = 0; i < num; i++) {
      result.push(middle - num / 2 + 1 + i)
    }
  }
  return result
}
function solution(n, sum) {
  var min = Math.ceil(sum / n - ~~(n / 2))
  var max = ~~(sum / n + ~~(n / 2))
  let result = []
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}
console.log(solution(4, 14))
