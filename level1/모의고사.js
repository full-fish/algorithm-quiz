function solution(answers) {
  let stu1 = [1, 2, 3, 4, 5];
  let stu2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let scoreArr = [0, 0, 0];
  let resultArr = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === stu1[i % 5]) scoreArr[0]++;
    if (answers[i] === stu2[i % 8]) scoreArr[1]++;
    if (answers[i] === stu3[i % 10]) scoreArr[2]++;
  }

  let max = Math.max(...scoreArr);
  //?
  //   while (scoreArr.indexOf(max, 0) !== -1) {
  //     resultArr.push(scoreArr.indexOf(max, 0) + 1);
  //     scoreArr[scoreArr.indexOf(max, 0)] = -1;
  //   }
  //?
  for (let i = 0; i < scoreArr.length; i++) {
    if (scoreArr[i] === max) resultArr.push(i + 1);
  }
  //?
  return resultArr;
}
