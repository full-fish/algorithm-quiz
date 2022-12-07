function solution(emergency) {
  let result = []
  let sortArr = emergency.slice().sort((a, b) => b - a)
  emergency.forEach((ele) => {
    result.push(sortArr.indexOf(ele) + 1)
  })
  return result
}
console.log(solution([3, 76, 24]))
