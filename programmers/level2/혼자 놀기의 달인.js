let cards = [8, 6, 3, 7, 2, 5, 1, 4]
//        [0,0,0,0,0,0,0,0,0]
function solution(cards) {
  let arr = new Array(cards.length + 1).fill(0)
  let resultArr = []
  let temp = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) re(i)
  }
  function re(num) {
    if (arr[num] === 1) {
      resultArr.push(temp)
      temp = []
      return
    }
    arr[num] = 1
    temp.push(cards[num - 1])
    re(cards[num - 1])
  }
  const resultArrLenArr = resultArr.map(ele => ele.length).sort((a, b) => b - a)
  return resultArrLenArr[0] * (resultArrLenArr[1] ?? 0)
}
console.log(solution(cards))
