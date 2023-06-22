const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    str = input[0];
    let result = ''
    for (let c of str) {
        if (/[a-z]/.test(c)) result += c.toUpperCase()
        else result += c.toLowerCase()
    }
    console.log(result);
});