function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(solution(3, 12));
