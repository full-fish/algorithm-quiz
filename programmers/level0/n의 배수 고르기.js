function solution(n, numlist) {
  return numlist.filter((ele) => !(ele % n))
}
