// function solution(s) {
//   let result = ''
//   let obj = {}
//   s.split('')
//     .sort()
//     .forEach((ele) => (ele in obj ? obj[ele]++ : (obj[ele] = 1)))
//   for (let key in obj) {
//     if (obj[key] === 1) result += key
//   }
//   return result
// }

function solution(s) {
  let res = []
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c)
  return res.sort().join('')
}
console.log(solution('abcabcadc'))
