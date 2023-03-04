function solution(arr) {
  const result = new Array(arr.length).fill(-1)
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack.pop()] = arr[i]
    }
    stack.push(i)
  }
  return result
}
console.log(solution([7, 8, 9, 1, 5, 3, 6, 2]))
