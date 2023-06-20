function solution(arr, queries) {
    for (let n = 0; n < queries.length; n++) {
        const [i, j] = queries[n];
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}