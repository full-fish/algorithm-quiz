function solution(want, number, discount) {
  const day = number.reduce((a, c) => a + c)
  let result = 0
  for (let i = 0; i < discount.length - day + 1; i++) {
    let wantNumber = {}
    want.forEach((ele, i) => (wantNumber[ele] = number[i]))
    for (let j = i; j < day + i; j++) {
      if (discount[j] in wantNumber) wantNumber[discount[j]]--
    }
    let sum = true
    for (let key in wantNumber) {
      if (wantNumber[key] !== 0) sum = false
    }
    if (sum) result++
  }
  return result
}
