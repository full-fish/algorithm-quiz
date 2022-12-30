let input = `[231A01]   100
[231A02]   200
[231A03]   300
[231A04]   400
[231A05]   500
[231A06]   600
[231A07]   700`
let price = `800
1000`

function solution1(input, price) {
  let inputArr = trans(input)
  let priceArr = price.split('\n').map(ele => parseInt(ele.trim()))

  priceArr.forEach(price => {
    let result = []
    function repeat(sum, tempArr, index) {
      if (sum === price) return result.push(tempArr)
      else if (sum > price) return
      for (let i = index; i < inputArr.length; i++) {
        repeat(sum + inputArr[i][1], tempArr.concat(inputArr[i][0]), i)
      }
    }
    repeat(0, [], 0)
    result = result.map(ele => ele.join('+'))
    console.log(`price가 ${price}일 때, 총 경우의 수 : ${result.length}`)
    result.forEach(ele => console.log(ele))
    console.log('------------------')
  })

  function trans(str) {
    return str
      .split('\n')
      .map(ele => ele.split(/ +/g))
      .map(ele => [ele[0], parseInt(ele[1])])
  }
}
function solution2(value1, value2) {
  //1. 데이터 변환 (조건 : 0이하는 안됨, 숫자 자리에는 숫자가 들어가야됨. 중복은 가능.)
  let items = value1
    .split('\n')
    .filter(v => v !== '')
    .map(v => {
      let vv = v.replace(/ +/g, ',').split(',')
      vv[1] = Number(vv[1])
      return vv
    })

  items.sort()

  let targets = value2
    .split('\n')
    .filter(v => v !== '')
    .map(v => Number(v.replace(/ +/g, '')))

  //2. 조합 찾기. (중복 조합이라 목표 값이 크면 오래 걸릴 수 있음.)
  for (let index = 0; index < targets.length; index++) {
    let target = targets[index]
    let pointer = items.length - 1

    let cur = []
    let result = []
    let finish = false

    while (true) {
      while (pointer < 0) {
        if (cur.length > 0) {
          pointer = cur.pop()[1] - 1
        } else {
          finish = true
          break
        }
      }

      if (finish || items[pointer][1] <= 0) break //inf

      cur.push([items[pointer], pointer])

      let sum = 0
      for (let i = 0; i < cur.length; i++) {
        sum += cur[i][0][1]
      }

      if (sum > target) {
        cur.pop()
        pointer--
      } else if (sum === target) {
        let tempArr = []
        for (let i = 0; i < cur.length; i++) {
          tempArr.push(cur[i][0][0])
        }
        result.push(tempArr)
        cur.pop()
        pointer--
      }
    }

    //3. 결과 출력
    // console.log(target)
    // if (result.length === 0) {
    //   console.log('(없음)')
    // }
    // for (let r = result.length - 1; r >= 0; r--) {
    //   let resultString = result[r].reverse().join('+')
    //   console.log(result.length - r + '. ' + resultString)
    // }
  }
}
console.time('1')
solution1(input, price)
console.timeEnd('1')
console.time('2')
solution2(input, price)
console.timeEnd('2')
