let arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
let arr2 = [
  [3, 3],
  [3, 3],
];
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
    }
    result.push(temp);
  }
  return result;
}
console.log(solution(arr1, arr2));
