function generateNumbers(n, currNumber, result) {
    if (n === 0) {
        return result.push(Number(currNumber));
    }
    generateNumbers(n - 1, currNumber + "0", result);
    generateNumbers(n - 1, currNumber + "5", result);
}

function solution(l, r) {
    let result = [];
    generateNumbers(String(r).length, '', result)
    result = result.filter(num => num >= l && num <= r).sort((a, b) => a - b);
    return result.length ? result : [-1];
}