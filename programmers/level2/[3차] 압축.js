let msg = 'TOBEORNOTTOBEORTOBEORNOT'
function solution(msg) {
  let dic = ['first']
  let result = []
  let lastI = 0
  for (let i = 0; i < 26; i++) {
    dic.push(String.fromCharCode(65 + i))
  }

  for (let i = 0; i < msg.length; i++) {
    for (let j = i + 1; j < msg.length + 1; j++) {
      if (!dic.includes(msg.slice(i, j))) {
        result.push(dic.indexOf(msg.slice(i, j - 1)))
        dic.push(msg.slice(i, j))
        if (j - i > 2) i += j - i - 2
        lastI = i + 1
        break
      } else {
      }
    }
  }
  result.push(dic.indexOf(msg.slice(lastI, msg.length + 1)))
  return result
}
console.log(solution(msg))
