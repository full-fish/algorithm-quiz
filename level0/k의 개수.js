function solution(i, j, k) {
  let count = 0
  for (let n = i; n <= j; n++) {
    let arr = String(n).split('')
    arr.forEach((ele) => {
      if (Number(ele) === k) count++
    })
  }
  return count
}
