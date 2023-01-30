let fees = [1, 461, 1, 10]
let records = ['00:00 1234 IN']
function solution(fees, records) {
  let result = []
  let obj = {}
  for (let i = 0; i < records.length; i++) {
    let time = records[i].slice(0, 5)
    let number = parseInt(records[i].slice(6, 10))
    let inOut = records[i].slice(-3)
    if (!obj[number]) obj[number] = {}
    if (inOut === ' IN') {
      obj[number]['time'] = time
      obj[number]['inOut'] = 'IN'
    } else {
      obj[number]['sumTime'] = obj[number]['sumTime'] ? obj[number]['sumTime'] + getMinute(obj[number]['time'], time) : getMinute(obj[number]['time'], time)
      obj[number]['inOut'] = 'OUT'
    }
  }
  for (let key in obj) {
    if (obj[key].inOut === 'IN')
      obj[key]['sumTime'] = obj[key]['sumTime'] ? obj[key]['sumTime'] + getMinute(obj[key]['time'], '23:59') : getMinute(obj[key]['time'], '23:59')
  }

  for (let key in obj) {
    if (obj[key]['sumTime'] <= fees[0]) result.push(fees[1])
    else result.push(fees[1] + Math.ceil((obj[key]['sumTime'] - fees[0]) / fees[2]) * fees[3])
  }
  return result
}
function getMinute(pre, lat) {
  let a = new Date(`2022/01/01 ${pre}`)
  let b = new Date(`2022/01/01 ${lat}`)
  return (b.getTime() - a.getTime()) / 60000
}
console.log(solution(fees, records))
