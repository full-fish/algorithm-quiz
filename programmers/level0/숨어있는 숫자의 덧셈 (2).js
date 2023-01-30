function solution(my_string) {
  return my_string.match(/\d+/g) !== null
    ? my_string
        .match(/\d+/g)
        .map((ele) => parseInt(ele))
        .reduce((acc, cur) => acc + cur)
    : 0
}
console.log(solution('zzz111'))
