function solution(babbling) {
  let arr = ['aya', 'ye', 'woo', 'ma']
  for (let i = 0; i < arr.length; i++) {
    let regex = new RegExp(`${arr[i]}`, 'g')
    let repeat = new RegExp(`${arr[i]}${arr[i]}`)
    babbling = babbling.map(ele => ele.replace(repeat, '!'))
    babbling = babbling.map(ele => ele.replace(regex, '1'))
  }
  return babbling.filter(ele => !isNaN(Number(ele))).length
}
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/
  const regexp2 = /^(aya|ye|woo|ma)+$/
  return babbling.reduce((ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans), 0)
}
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']))
