function solution(numLog) {
    let result = ''
    for (let i = 0; i < numLog.length - 1; i++) {
        const sub = numLog[i + 1] - numLog[i]
        if (sub === 1) result += 'w'
        else if (sub === -1) result += 's'
        else if (sub === 10) result += 'd'
        else result += 'a'
    }
    return result
}