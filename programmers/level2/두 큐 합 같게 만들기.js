// function solution(queue1, queue2) {
//     const len = queue1.length
//     let sum1 = sum(queue1)
//     let sum2 = sum(queue2)
//     const half = (sum1+sum2)/2
//     if(!Number.isInteger(half)) return -1
//     let count = 0
//     while(count<len*2){
//         if(sum1 === half) return count
//         else if (sum1> half){
//             const temp = queue1.shift()
//             sum1 -= temp
//             queue2.push(temp)
//             count++
//         }
//         else{
//             const temp = queue2.shift()
//             sum1 += temp
//             queue1.push(temp)
//             count++
//         }
//     }
//      return -1
//   }
//   function sum(arr){
//       return arr.reduce((a,c)=>a+c)
//   }
let queue1 = [3, 2, 7, 2]
let queue2 = [4, 6, 5, 1]
function solution(queue1, queue2) {
  const len = queue1.length
  let sum1 = sum(queue1)
  let sum2 = sum(queue2)
  let p1 = 0
  let p2 = 0
  const half = (sum1 + sum2) / 2
  if (!Number.isInteger(half)) return -1
  let count = 0
  while (count < len * 3) {
    if (sum1 === half) return count
    else if (sum1 > half) {
      const temp = queue1[p1]
      p1++
      sum1 -= temp
      queue2.push(temp)
      count++
    } else {
      const temp = queue2[p2]
      p2++
      sum1 += temp
      queue1.push(temp)
      count++
    }
  }
  return -1
}
function sum(arr) {
  return arr.reduce((a, c) => a + c)
}
console.log(solution(queue1, queue2))
