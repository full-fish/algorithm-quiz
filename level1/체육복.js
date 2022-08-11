let n = 5;
let lost = [1, 2, 4];
let reserve = [2, 3, 4, 5];
function solution(n, lost, reserve) {
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1);
      reserve.splice(i, 1);
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] - 1 === lost[j] || reserve[i] + 1 === lost[j]) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
      }
    }
  }
}
console.log(solution(n, lost, reserve));
