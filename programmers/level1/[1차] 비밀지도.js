// function solution(n, arr1, arr2) {
//   let binaryArr1 = [];
//   let binaryArr2 = [];
//   let sumBinaryArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     binaryArr1.push(arr1[i].toString(2));
//     binaryArr2.push(arr2[i].toString(2));

//     sumBinaryArr.push(
//       (parseInt(binaryArr1[i]) + parseInt(binaryArr2[i]))
//         .toString()
//         .split("")
//         .map((ele) => (parseInt(ele) > 0 ? "#" : " "))
//         .join("")
//         .padStart(n)
//     );
//   }
//   return sumBinaryArr;
// }

var solution = (n, a, b) => a.map((a, i) => (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'))
