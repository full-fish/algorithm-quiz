// function solution(array) {
//   let result = 0
//   array.forEach((ele) => {
//     String(ele)
//       .split('')
//       .forEach((ele2) => {
//         if (ele2 === '7') result++
//       })
//   })
//   return result
// }
function solution(array) {
  return array.join('').split('7').length - 1
}
