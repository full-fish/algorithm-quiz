function solution(arr) {
    let i = 0
    let stk = []
    while (i < arr.length) {
        if (!stk.length) stk.push(arr[i])
        else {
            if (stk[stk.length - 1] === arr[i]) stk.pop()
            else stk.push(arr[i])
        }
        i++
    }
    return stk.length ? stk : [-1]
}