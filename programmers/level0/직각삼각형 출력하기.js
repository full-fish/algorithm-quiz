const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input = line.split(' ')
}).on('close', function () {
  let num = parseInt(input[0])
  for (let i = 1; i <= num; i++) {
    let star = ''
    for (j = 1; j <= i; j++) {
      star += '*'
    }
    console.log(star)
  }
})
