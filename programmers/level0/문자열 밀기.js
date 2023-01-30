function solution(A, B) {
  if (A === B) return 0
  for (let i = 1; i < A.length; i++) {
    let splitA = A.split('')
    splitA.unshift(splitA.pop())
    A = splitA.join('')
    if (A === B) return i
  }
  return -1
}

let solution = (a, b) => (b + b).indexOf(a)
console.log(solution('hello', 'ohell'))
