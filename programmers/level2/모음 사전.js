function solution(word) {
  let arr = ['A', 'E', 'I', 'O', 'U']
  let result = []
  for (let i = 1; i <= 5; i++) {
    DFS(i, [])
  }
  function DFS(n, tempArr) {
    if (n === 0) return result.push(tempArr.join(''))
    for (let i = 0; i < arr.length; i++) {
      DFS(n - 1, tempArr.concat(arr[i]))
    }
  }
  result.sort()
  return result.indexOf(word) + 1
}
