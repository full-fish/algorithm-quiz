let s = "try hello world";
let s2 = " abc abc  abc   abc ";
function solution(s) {
  let answer = "";
  let wordIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      wordIndex = -1;
      answer += s[i];
    } else if (wordIndex % 2 === 0) {
      answer += s[i].toUpperCase();
    } else answer += s[i].toLowerCase();
    wordIndex++;
  }
  return answer;
}
console.log(solution(s2));
