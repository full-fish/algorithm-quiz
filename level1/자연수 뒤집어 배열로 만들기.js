let n = 12345;
//! 문자 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((ele) => parseInt(ele));
}

console.log(Math.floor(n / 10));

//! 숫자 풀이
function solution2(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
