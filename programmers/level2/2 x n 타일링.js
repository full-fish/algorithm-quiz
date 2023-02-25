function solution(n) {
  let arr = new Array(n)
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
  }
  return arr[n]
}
