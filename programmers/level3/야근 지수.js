function solution(n, works) {
    let sortedWorks = works.sort((a, b) => b - a)
    while (n > 0) {
        sortedWorks[0]--
        if (sortedWorks[0] < 0) return 0
        for (let i = 0; i < sortedWorks.length; i++) {
            if (sortedWorks[i] < sortedWorks[i + 1]) {
                [sortedWorks[i], sortedWorks[i + 1]] = [sortedWorks[i + 1], sortedWorks[i]];
            }
            else break
        }
        n--
    }
    return sortedWorks.reduce((a, c) => a + c ** 2, 0)
}