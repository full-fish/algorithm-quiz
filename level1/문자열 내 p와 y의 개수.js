let s = "pPoooyY";
function solution(s) {
  let countP = 0;
  let countY = 0;
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") countP++;
    else if (s[i] === "y") countY++;
  }
  return countP === countY ? true : false;
}
solution(s);
