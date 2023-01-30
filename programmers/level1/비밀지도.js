let n = 6;
let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
function solution(n, arr1, arr2) {
  let binaryArr1 = [];
  let binaryArr2 = [];
  let sumBinaryArr = [];
  for (let i = 0; i < arr1.length; i++) {
    binaryArr1.push(arr1[i].toString(2));
    binaryArr2.push(arr2[i].toString(2));

    sumBinaryArr.push(
      (parseInt(binaryArr1[i]) + parseInt(binaryArr2[i]))
        .toString()
        .split("")
        .map((ele) => (parseInt(ele) > 0 ? "#" : " "))
        .join("")
        .padStart(n)
    );
  }
  return sumBinaryArr;
}

var solution2 = (n, arr1, arr2) =>
  arr1.map((a, i) =>
    (a | arr2[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );

console.log(solution(n, arr1, arr2));
console.log(solution2(n, arr1, arr2));
