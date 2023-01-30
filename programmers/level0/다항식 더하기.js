function solution(polynomial) {
  let arr = polynomial.match(/\d+x?|x/g)
  let x = 0
  let num = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('x')) {
      if (arr[i] === 'x') x += 1
      else x += parseInt(arr[i].match(/\d+/)[0])
    } else num += parseInt(arr[i])
  }
  if (x === 1) x = ''
  if (x !== 0) {
    if (num !== 0) return `${x}x + ${num}`
    else return `${x}x`
  } else {
    if (num !== 0) return `${num}`
    else return '0'
  }
}
console.log(solution('3x + 7 + x + 1'))
