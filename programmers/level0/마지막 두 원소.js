function solution(num_list) {
    const len = num_list.length
    const lastNum = num_list[len - 1]
    const preLastNum = num_list[len - 2]
    return lastNum > preLastNum ? num_list.concat(lastNum - preLastNum) : num_list.concat(lastNum * 2)
}