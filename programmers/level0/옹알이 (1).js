function solution(babbling) {
  let arr = ['aya', 'ye', 'woo', 'ma']
  for (let i = 0; i < arr.length; i++) {
    let regex = new RegExp(`${arr[i]}`)
    babbling = babbling.map(ele => ele.replace(regex, '1'))
  }
  return babbling.filter(ele => !isNaN(Number(ele))).length
}
console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']))
