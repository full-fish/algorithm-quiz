let s = "3people unFollowed me";
function solution(s) {
  let sSplitArr = s.split(" ");
  for (let i = 0; i < sSplitArr.length; i++) {
    sSplitArr[i] = sSplitArr[i].toLowerCase().replace(/^[a-z]/, (x) => x.toUpperCase());
  }
  return sSplitArr.join(" ");
}
solution(s);
s.split(" ").map((v) => console.log(v.substring(0)));
