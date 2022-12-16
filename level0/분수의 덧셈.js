function solution(denum1, num1, denum2, num2) {
  let totalNum = num1 * num2
  let totalDenum = denum1 * num2 + denum2 * num1
  let gcdNum = gcd(totalNum, totalDenum)
  return [totalDenum / gcdNum, totalNum / gcdNum]
}
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b
}
