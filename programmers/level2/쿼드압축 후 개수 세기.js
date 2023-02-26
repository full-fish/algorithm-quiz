let arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]
function solution(arr) {
  let one = 0
  let zero = 0
  function DFS(arr) {
    const len = arr.length
    const sum = arr.flat().reduce((a, c) => a + c)
    if (len ** 2 === sum) return one++
    else if (sum === 0) return zero++
    else {
      for (let i = 0; i < len; i += len / 2) {
        let t1 = []
        let t2 = []
        for (let j = i; j < i + len / 2; j++) {
          t1.push(arr[j].slice(0, len / 2))
          t2.push(arr[j].slice(len / 2))
        }
        DFS(t1)
        DFS(t2)
      }
    }
  }
  DFS(arr)
  return [zero, one]
}
console.log(solution(arr))
