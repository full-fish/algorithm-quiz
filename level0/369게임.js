function solution(order) {
  return order
    .toString()
    .split('')
    .filter((ele) => ele === '3' || ele === '6' || ele === '9').length
}
