let id_list1 = ["muzi", "frodo", "apeach", "neo"];
let report1 = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
let k1 = 2;
let id_list2 = ["con", "ryan"];
let report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k2 = 3;

function solution(id_list, report, k) {
  //객체화 시켜서
  let obj = {};
  let overk_tarket = [];
  let result = new Array(id_list.length).fill(0);
  //신고자와 피신고자 객체화
  for (let i = 0; i < report.length; i++) {
    let target = report[i].split(" ")[0];
    let reporter = report[i].split(" ")[1];
    // 아직 객체화 안된거면 객체로 만들고
    if (obj[reporter] === undefined) {
      obj[reporter] = [target];
    } // 객체 있으면 배열로 푸쉬
    else {
      // 중복된거 삭제위해
      if (!obj[reporter].includes(target)) {
        obj[reporter].push(target);
      }
    }
  }
  //k값 넘는 사람(제제받는사람) 배열에 넣음
  for (let key in obj) {
    if (obj[key].length >= k) {
      overk_tarket.push(key);
    }
  }
  //제제 받는 사람을 키로 가지고 있는 값들의 list인덱스를 찾아서 배열에 ++
  for (let i = 0; i < overk_tarket.length; i++) {
    for (let j = 0; j < obj[overk_tarket[i]].length; j++) {
      let index = id_list.indexOf(obj[overk_tarket[i]][j]);
      result[index]++;
    }
  }
  return result;
}
console.log(solution(id_list1, report1, k1));
console.log("-----------------");
console.log(solution(id_list2, report2, k2));

// let a = { b: ["c"] };
// a.d = ["e"];
// a.d.push("f");

// console.log(a.f);
// let a = "muzi frodo";
// a = a.split(" ");
// console.log(a);
