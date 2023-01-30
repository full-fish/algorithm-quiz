let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

let N2 = 5;
let stages2 = [3, 3, 3, 3];
// function solution(N, stages) {
//   let result = {};
//   let peopleLen = stages.length;
//   // 객체 생성
//   for (let i = 1; i <= N; i++) {
//     result[i] = 0;
//   }
//   // 각 단계에 머무르는 사람 수
//   for (let j = 0; j < stages.length; j++) {
//     result[stages[j]]++;
//   }
//   // 실패율 객체 생성
//   let failLate = {};
//   for (let k = 1; k <= N; k++) {
//     failLate[k] = 0;
//   }

//   // 실패율 구하기
//   for (let l = 1; l <= N; l++) {
//     failLate[l] = result[l] / peopleLen;
//     peopleLen -= result[l];
//   }
//   console.log(result);
//   console.log(failLate);
//   console.log(failLate.sort((a, b) => a - b));
// }

function solution(N, stages) {
  let result = [];
  let failLateArr = new Array(N).fill(0);
  let peopleLen = stages.length;

  stages = stages.sort();

  // 실패율 들어간 배열 만들기
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i + 1) count++;
    }
    failLateArr[i] = peopleLen !== 0 ? count / peopleLen : 0;
    peopleLen -= count;
  }
  console.log(failLateArr);
  // 내림차순하기
  for (let i = 0; i < N; i++) {
    let min = -1;
    let index = -1;
    for (let j = 0; j < failLateArr.length; j++) {
      if (failLateArr[j] > min) {
        min = failLateArr[j];
        index = j;
      }
    }
    result.push(index + 1);
    failLateArr[index] = -1;
  }
  return result;
}
// console.log(solution(N, stages));
// console.log(solution(N2, stages2));

function solution2(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    console.log(reach);
    let curr = stages.filter((x) => x === i).length;
    console.log(curr);
    console.log("object");
    result.push([i, curr / reach]);
  }
  console.log(result);
  result.sort((a, b) => b[1] - a[1]);
  console.log(result);
  return result.map((x) => x[0]);
}
console.log(solution2(N, stages));
