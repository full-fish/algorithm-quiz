function solution(numbers) {
  let result = []
  let count = 0
  let arr = numbers.split('')
  console.log(arr)
  function DFS(n, str) {
    if (n === 0) return result.push(str)
    for (let i = 0; i < arr.length; i++) {
      DFS(n - 1, str.concat(arr[i]))
    }
  }
  //   for (let i = 1; i <= numbers.length; i++) {
  //     DFS(i, '')
  //   }
  DFS(3, '')
  console.log(result)
  result.forEach(ele => {
    if (isPrime(Number(ele))) count++
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
console.log(solution('011'))
