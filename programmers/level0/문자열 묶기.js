function solution(strArr) {
    let obj = {}
    strArr.forEach((str) => {
        const len = str.length
        len in obj ? obj[len]++ : obj[len] = 1
    })
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][1]
}