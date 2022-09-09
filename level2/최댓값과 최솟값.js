let s = "1 2 3 4";
function solution(s) {
  return `${Math.min(...s.split(" ").map((ele) => parseInt(ele)))} ${Math.max(
    ...s.split(" ").map((ele) => parseInt(ele))
  )}`;
}
