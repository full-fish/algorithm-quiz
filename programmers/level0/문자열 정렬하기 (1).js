function solution(my_string) {
  return my_string
    .match(/\d/g)
    .map((ele) => parseInt(ele))
    .sort((a, b) => a - b)
}
