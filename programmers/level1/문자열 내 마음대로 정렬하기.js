let strings = ["abce", "abcd", "cdx"];
let n = 2;
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
  return strings;
}
console.log(solution(strings, n));
