function solution(rsp) {
  return rsp
    .split('')
    .map((ele) => (ele === '2' ? '0' : ele === '0' ? '5' : '2'))
    .join('')
}
