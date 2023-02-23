function solution(elements) {
  const len = elements.length
  let result = []
  for (let i = 0; i < len; i++) {
    for (let rp = 1; rp <= len; rp++) {
      let sum = 0
      for (let lp = 0; lp < rp; lp++) {
        sum += elements[lp]
      }
      result.push(sum)
    }
    elements.unshift(elements.pop())
  }
  return [...new Set(result)].length
}
//! 다른 사람 코드
function solution2(elements) {
  const circular = elements.concat(elements)
  const set = new Set()
  for (let i = 0; i < elements.length; i++) {
    let sum = 0
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j]
      set.add(sum)
    }
  }
  return set.size
}
