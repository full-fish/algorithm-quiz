//! 시간 초과
function solution(A, B) {
    let n = 0
    let sortedA = A.sort((a, b) => b - a)
    let sortedB = B.sort((a, b) => b - a)
    for (let i = 0; i < sortedB.length; i++) {
        for (let j = n; j < sortedA.length; j++) {
            if (sortedB[i] > sortedA[j]) {
                sortedA.splice(j, 1)
                n = j
                break
            }
        }
    }
    return sortedB.length - sortedA.length
}
//! 푼 거
function solution(A, B) {
    let n = 0
    let count = 0
    let checkedArr = Array.from({ length: A.length }).fill(1)
    let sortedA = A.sort((a, b) => b - a)
    let sortedB = B.sort((a, b) => b - a)
    for (let i = 0; i < sortedB.length; i++) {
        for (let j = n; j < sortedA.length; j++) {
            if (checkedArr[j] && sortedB[i] > sortedA[j]) {
                checkedArr[j] = 0
                n = j
                count++
                break
            }
        }
    }
    return count
}