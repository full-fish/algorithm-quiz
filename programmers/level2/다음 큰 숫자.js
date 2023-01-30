function solution(n) {
  let nCount = n.toString(2).match(/1/g).length;
  while (n++) {
    if (n.toString(2).match(/1/g).length == nCount) return n;
  }
}
solution(78);
