let numlist = [1, 2, 3, 4, 5, 6]
let n = 4

function solution(numlist, n) {
  return numlist.map(ele => ele - n)
}
console.log(solution(numlist, n))
