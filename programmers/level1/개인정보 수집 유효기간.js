let today = '2022.05.19'
let terms = ['A 6', 'B 12', 'C 3']
let privacies = ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
function solution(today, terms, privacies) {
  let result = []
  let termsObj = {}
  terms.forEach(ele => {
    termsObj[ele.slice(0, 1)] = Number(ele.slice(2))
  })
  let [nowYear, nowMonth, nowDay] = [Number(today.slice(0, 4)), Number(today.slice(5, 7)), Number(today.slice(8, 10))]
  privacies.forEach((ele, index) => {
    let [year, month, day, term] = [Number(ele.slice(0, 4)), Number(ele.slice(5, 7)), Number(ele.slice(8, 10)), ele.slice(11, 12)]
    if (day > 1) {
      day -= 1
      month += termsObj[term]
    } else {
      day = 28
      month += termsObj[term] - 1
    }
    while (month > 12) {
      month -= 12
      year += 1
    }
    if (nowYear > year) result.push(index + 1)
    else if (nowYear === year) {
      if (nowMonth > month) result.push(index + 1)
      else if (nowMonth === month) {
        if (nowDay > day) result.push(index + 1)
      }
    }
  })
  return result
}
//! 다른 사람 코드
function solution(today, terms, privacies) {
  var answer = []
  var [year, month, date] = today.split('.').map(Number)
  var todates = year * 12 * 28 + month * 28 + date
  var t = {}
  terms.forEach(e => {
    let [a, b] = e.split(' ')
    t[a] = Number(b)
  })
  privacies.forEach((e, i) => {
    var [day, term] = e.split(' ')
    day = day.split('.').map(Number)
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28
    if (dates <= todates) answer.push(i + 1)
  })
  return answer
}
console.log(solution(today, terms, privacies))
