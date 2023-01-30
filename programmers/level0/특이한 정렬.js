let numlist = [1, 2, 3, 4, 5, 6]
let n = 4

function solution(numlist, n) {
  return numlist
    .map(ele => {
      let position = 1
      if (ele - n >= 0) position = 1
      else position = -1
      return [ele, Math.abs(ele - n), position]
    })
    .sort((a, b) => b[2] - a[2])
    .sort((a, b) => a[1] - b[1])
    .map(ele => ele[0])
}
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a)
}
console.log(solution(numlist, n))
