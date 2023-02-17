let typeArr = [2, 3, 5]
let money = 19

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

  return ch
}
console.log(solution1(typeArr, money))
