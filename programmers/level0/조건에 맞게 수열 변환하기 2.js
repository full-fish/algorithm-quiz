function solution(arr) {
    let arr1 = arr
    let arr2 = next(arr)
    let count = 0
    while (!isSame(arr1, arr2)) {
        arr1 = arr2
        arr2 = next(arr2)
        count++
    }
    return count
}
function next(arr) {
    return arr.map((e) => {
        if (e >= 50 && e % 2 === 0) return e / 2
        else if (e < 50 && e % 2) return e * 2 + 1
        else return e
    })
}
function isSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}