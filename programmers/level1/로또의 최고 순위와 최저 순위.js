let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
function solution(lottos, win_nums) {
  let matchCount = 0;
  let zeroCount = 0;
  // 두 배열에서 일치하는 숫자 갯수 구함
  lottos.forEach((ele) => {
    if (win_nums.includes(ele)) matchCount++;
    // lottos 배열에서 0의 갯수 구함
    zeroCount = lottos.filter((ele) => 0 === ele).length;
  });
  let { max, min } = { max: matchCount + zeroCount, min: matchCount };
  if (max === 0) max++;
  if (min === 0) min++;
  return [7 - max, 7 - min];
}

console.log(solution(lottos, win_nums));

// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];
//   let minRank = win_nums.filter((x) => !lottos.includes(x));
//   let zero = lottos.filter((x) => x === 0);

//   let result = [rank[win_nums.length - minRank.length + zero.length], rank[win_nums.length - minRank.length]];

//   return result;
// }
