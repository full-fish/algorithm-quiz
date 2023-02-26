//! 처음푼거
// function solution(numbers) {
//   let result = []
//   numbers.forEach(ele => {
//     let binary = ele.toString(2)
//     let next = ele + 1
//     while (1) {
//       let nextBinary = next.toString(2)
//       if (differentBit(binary, nextBinary)) return result.push(next)
//       else next++
//     }
//   })
//   return result
// }
// function differentBit(a, b) {
//   let result = 0
//   const long = Math.max(a.length, b.length)
//   a = a.padStart(long, '0')
//   b = b.padStart(long, '0')
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) result++
//     else if (result > 2) return false
//   }
//   return result === 1 || result === 2 ? true : false
// }
//!
/*  가장 오른쪽에 처음으로 나오는 0을 1로 바꾸고 그 오른쪽자리를 0으로 바꾸면 됨
ex) 101111 -> 110111
0이 없는경우) 111 -> 1011
첫자리가 0인경우) 110 -> 111, 100 -> 101
*/
// function solution(numbers) {
//   let result = []
//   for (let i = 0; i < numbers.length; i++) {
//     let index = 0
//     let temp = numbers[i]
//     while (1) {
//       const other = temp % 2
//       if (!other) {
//         if (!index) {
//           result.push(numbers[i] + 1)
//           break
//         } else {
//           result.push(numbers[i] + 2 ** index - 2 ** (index - 1))
//           break
//         }
//       }
//       temp = parseInt(temp / 2)
//       index++
//     }
//   }
//   return result
// }
//! 효율적
function solution(numbers) {
  var result = []
  numbers.forEach(v => {
    if (v < 2 || v % 2 === 0) result.push(v + 1)
    else {
      let c = 2
      while (1) {
        if ((v + 1) % (c * 2) === 0) c = c * 2
        else break
      }
      result.push(v + c / 2)
    }
  })
  return result
}
console.log(solution([9]))
//  11
//  5    1
//  2    1
//  1    0
// 1001
