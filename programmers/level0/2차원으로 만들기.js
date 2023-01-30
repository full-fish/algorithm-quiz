let num_list = [1, 2, 3, 4, 5, 6, 7, 8]
let n = 2
function solution(num_list, n) {
  let result = []
  for (let i = 0; i < num_list.length; i += n) {
    let tempArr = []
    for (let j = 0; j < n; j++) {
      tempArr.push(num_list[i + j])
    }
    result.push(tempArr)
  }
  return result
}
console.log(solution(num_list, n))
