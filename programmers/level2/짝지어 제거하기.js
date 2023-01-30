function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else {
      stack.push(s[i]);
    }
  }
  return stack.length ? 0 : 1;
}
console.log(solution("baabaa"));
// let a = "aa";
// console.log(a.slice(0, 0) + a.slice(2));
