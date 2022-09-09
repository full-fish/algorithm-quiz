function solution(n, a, b) {
  let count = 1;
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  while (n > 1) {
    if (a + 1 === b && b % 2 === 0) return count;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    count++;
    n /= 2;
  }
}
console.log(solution(8, 4, 7));
