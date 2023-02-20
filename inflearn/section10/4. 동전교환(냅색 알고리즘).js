let typeArr = [2, 3, 5]
let money = 12

function solution1(typeArr, money) {
  // let ch = new Array(Math.ceil(money / Math.min(...typeArr)) + 1).fill(0)
  let ch = new Array(money + 1).fill(1)
  for (let i = 0; i < typeArr.length; i++) {
    for (let j = typeArr[i]; j < ch.length; j++) {
      let division = j / typeArr[i]
      if (Number.isInteger(division)) ch[j] = division
      else {
        const quotient = ~~division
        const remainder = j % typeArr[i]
        ch[j] = quotient + ch[remainder]
      }
    }
  }
  return ch[money]
}
//! 레퍼런스 현재 오타가 있음 찾아야함
//! 그리고 나랑 방법이 다른데 내 방법은 sort먼저 하고 해야함
//! 아직 제대로 안봄 강의 볼것
function solution2(typeArr, money) {
  let answer = 0
  let dy = Array.from({ length: money + 1 }, () => 1000)
  dy[0] = 0
  for (let i = 1; i < typeArr.length; i++) {
    for (let j = typeArr[i]; j <= money; j++) {
      dy[j] = Math.min(dy[j], dy[j - typeArr[i]] + 1)
    }
  }
  answer = dy[money]
  return answer
}
console.log(solution1(typeArr, money))
console.log(solution2(typeArr, money))
