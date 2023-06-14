function solution(number, n, m) {
    return (!(number % n) && !(number % m)) ? 1 : 0
}