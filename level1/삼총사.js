function solution(number) {
  let result = []
  function combination(n, number, tempArr) {
    if (n === 0) {
      result.push(tempArr.slice())
      return
    }
    for (let i = 0; i < number.length; i++) {
      const fixed = number[i]
      combination(n - 1, number.slice(i + 1), tempArr.concat(fixed))
    }
  }
  combination(3, number, [])
  return result.filter(ele => ele.reduce((arr, cur) => arr + cur) === 0).length
}
console.log(solution([-3, -2, -1, 0, 1, 2, 3]))
