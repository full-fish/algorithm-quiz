function solution(record) {
  let obj = {}
  let result = []
  record.forEach(ele => {
    ;[inOut, id, nickName] = ele.split(' ')
    if (inOut !== 'Leave') obj[id] = nickName
  })
  record.forEach(ele => {
    ;[inOut, id, nickName] = ele.split(' ')
    if (inOut !== 'Change') result.push(`${obj[id]}님이 ${inOut === 'Enter' ? '들어왔' : '나갔'}습니다.`)
  })
  return result
}
console.log(solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']))
