function solution(numbers) {
  let result = []
  numbers.forEach(ele => {
    let binary = ele.toString(2)
    let next = ele + 1
    while (1) {
      let nextBinary = next.toString(2)
      if (differentBit(binary, nextBinary)) return result.push(next)
      else next++
    }
  })
  return result
}
function differentBit(a, b) {
  let result = 0
  const long = Math.max(a.length, b.length)
  a = a.padStart(long, '0')
  b = b.padStart(long, '0')
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) result++
    else if (result > 2) return false
  }
  return result === 1 || result === 2 ? true : false
}
console.log(solution([2, 7]))
