function solution(numbers) {
  let result = []
  let count = 0
  let arr = numbers.split('')
  const len = numbers.length
  function DFS(n, str) {
    if (n === 0) return result.push(str)
    for (let i = 0; i < len; i++) {
      DFS(n - 1, str.concat(arr[i]))
    }
  }
  DFS(len, '')

  result = [...new Set(result)]
  // console.log(result)
  result.forEach(ele => {
    if (isPrime(Number(ele))) {
      console.log(ele)
      count++
    }
  })
  return count
}
function isPrime(num) {
  if (num <= 1) return false
  if (num % 2 === 0) return num === 2 ? true : false
  const sqrt = parseInt(Math.sqrt(num))
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false
  }
  return true
}
console.log(solution('1231'))
