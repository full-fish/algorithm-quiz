function solution(arr1, arr2) {
    const len1 = arr1.length
    const len2 = arr2.length
    if (len1 === len2) {
        const sum1 = arr1.reduce((a, c) => a + c)
        const sum2 = arr2.reduce((a, c) => a + c)
        if (sum1 === sum2) return 0
        else if (sum1 > sum2) return 1
        else return -1
    }
    else {
        if (len1 === len2) return 0
        else if (len1 > len2) return 1
        else return -1
    }
}