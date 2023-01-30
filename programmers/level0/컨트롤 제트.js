function solution(s) {
  return (
    s
      .replace(/\d+ Z|-\d+ Z/g, '')
      .match(/\d+|-\d+/g)
      ?.map((ele) => parseInt(ele))
      .reduce((acc, cur) => acc + cur) ?? 0
  )
}
console.log(solution('10 Z 20 Z'))
