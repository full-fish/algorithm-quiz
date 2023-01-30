function solution(s1, s2) {
  let result = 0
  s1.forEach((ele1) => {
    s2.forEach((ele2) => {
      if (ele1 === ele2) {
        result++
      }
    })
  })
  return result
}
