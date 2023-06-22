function solution(arr) {
    let indexArr = []
    arr.forEach((e, i) => e === 2 ? indexArr.push(i) : '')
    if (indexArr.length === 0) return [-1]
    return arr.slice(indexArr[0], indexArr[indexArr.length - 1] + 1)
}