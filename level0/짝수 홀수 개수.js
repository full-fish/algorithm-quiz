function solution(num_list) {
  let odd = num_list.filter((ele) => ele % 2).length
  return [num_list.length - odd, odd]
}
