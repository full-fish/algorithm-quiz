function solution(arr, queries) {
    queries.forEach((querie) => {
        const [s, e, k] = querie
        for (let i = s; i <= e; i++) {
            if (i % k === 0) arr[i]++
        }
    })
    return arr
}