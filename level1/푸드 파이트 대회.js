function solution(food) {
  let result = '0'
  for (let i = food.length - 1; i > 0; i--) {
    const add = String(i).repeat(~~food[i] / 2)
    result = add + result + add
  }
  return result
}
console.log(solution([1, 3, 4, 6]))
