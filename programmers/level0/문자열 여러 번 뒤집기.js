function solution(my_string, queries) {
    for (let i = 0; i < queries.length; i++) {
        let arr = my_string.split('')
        let s = queries[i][0]
        let e = queries[i][1] + 1
        my_string = arr.slice(0, s).concat(arr.slice(s, e).reverse(), arr.slice(e)).join('')
    }
    return my_string
}