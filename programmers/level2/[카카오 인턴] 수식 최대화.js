function solution(expression) {
  expression = expression.replace(/(\d+[\+\-\/\*])/g, '$1 ')
  let max = 0
  let result = []
  let arr = ['+', '-', '*', '/']
  function dfs(L, temp) {
    if (L === 0) return result.push(temp)
    for (let i = 0; i < arr.length; i++) {
      if (!temp.includes(arr[i])) dfs(L - 1, temp.concat(arr[i]))
    }
  }
  dfs(arr.length, [])
  for (let n = 0; n < result.length; n++) {
    let tempStr = expression
    for (let i = 0; i < result[n].length; i++) {
      let reg = new RegExp(`(-*\\d+)(\\${result[n][i]}) (-*\\d+)`)
      while (tempStr.match(reg)?.[0]) {
        const match = tempStr.match(reg)[0]
        tempStr = tempStr.replace(match, eval(match))
      }
    }
    if (max <= Math.abs(tempStr)) max = Math.abs(tempStr)
  }
  return max
}
