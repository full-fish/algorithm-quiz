let s = "110010101001";
function solution(s) {
  let count_counter = 0;
  let zero_counter = 0;
  while (s !== "1") {
    let temp = s.replace(/0/g, "");
    zero_counter += s.length - temp.length;
    s = temp.length.toString(2);
    count_counter++;
  }
  return [count_counter, zero_counter];
}

solution2(s);
console.log(toString());
console.log(s.match(/0/g).length);
console.log(s.match(/0/g) || []);
function solution2(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += s.match(/0/g).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
