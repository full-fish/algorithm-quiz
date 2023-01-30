function solution(ingredient) {
  //   let str = ingredient.join('')
  //   let result = 0
  //   while (/1231/.test(str)) {
  //     str = str.replace(/1231/, '')
  //     result++
  //   }
  //   return result
  //!
  //   let str = ingredient.join('')
  //   let result = 0
  //   while (str.indexOf('1231') !== -1) {
  //     str = str.split(str.indexOf('1231'), 4)
  //     result++
  //   }
  //!
  let tempArr = ingredient.slice(0, 3)
  let result = 0
  for (let i = 3; i < ingredient.length; i++) {
    tempArr.push(ingredient[i])
    while (tempArr.slice(-4).join('') === '1231') {
      tempArr.splice(-4, 4)
      result++
    }
  }
  return result
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
