// let order = [4, 3, 1, 2, 5]
let order = [5, 4, 3, 2, 1]
function solution(order) {
  let temp = []
  let count = 0
  const len = order.length
  for (let i = 0; i < len; i++) {
    const box = i + 1
    if (order[0] === box) {
      order.shift()
      count++
    }
    while (order[0] === temp[0]) {
      if (order.length === 0) break
      count++
      order.shift()
      temp.shift()
    }
    if (order[0] !== box && order[0] !== temp[0]) temp.unshift(box)
  }
  return count
}
console.log(solution(order))

// 1 2 3 4 5
// 메인 5 
// 보조 1 2 
// 트럭 4 3

// 1 2 3 4 5
// 메인 5 4 3 2 1
// 보조 1 2 3 4 5