let A = [10, 4, 2];
let B = [5, 4, 4];

function solution(A, B) {
  let result = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  A.map((ele, index) => (result += ele * B[index]));
  // for (let i = 0; i < A.length; i++) {
  //   result += A[i] * B[i];
  // }
  return result;
}
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx]);
}
console.log(solution(A, B));
