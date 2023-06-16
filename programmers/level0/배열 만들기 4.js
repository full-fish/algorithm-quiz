function solution(arr) {
    let stk = []
    let i = 0
    while (i < arr.length) {
        if (stk.length && stk[stk.length - 1] >= arr[i]) stk.pop()
        else {
            stk.push(arr[i])
            i++
        }
    }
    return stk
}