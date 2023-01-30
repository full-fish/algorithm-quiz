// function solution(s) {
//   return (s.length === 4 || s.length === 6) && !isNaN(parseInt(s)) ? true : false;
// }

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(parseInt(s[i]))) return false;
    }
    return true;
  } else return false;
}
console.log(parseInt("a234"[1]));

console.log(parseInt("3e10"));
