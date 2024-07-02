function solution(friends, gifts) {
  let result = 0
  // 각각의 개인이 얼마나 받았는지 선물점수를 위해
  let eachObj = {}
  friends.forEach((ele) => {
    eachObj[ele] = 0
  })

  // 서로간의 받은거 위해
  let mutualObj = {}
  gifts.forEach((ele) => {
    let split = ele.split(' ')

    eachObj[split[0]]++
    eachObj[split[1]]--

    if ([split[0], split[1]] in mutualObj) mutualObj[[split[0], split[1]]]++
    else mutualObj[[split[0], split[1]]] = 1
  })

  for (let i = 0; i < friends.length; i++) {
    let gift = 0
    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue
      // 준게 있을때
      if (mutualObj[[friends[i], friends[j]]]) {
        // 받은게 없으면
        if (!(mutualObj[[friends[j], friends[i]]])) {
          gift++
        }
        // 받은게 있을때
        else {
          // 더 많이 주면
          if (mutualObj[[friends[i], friends[j]]] > mutualObj[[friends[j], friends[i]]]) gift++
          // 똑같이 주고 받았을 경후는 선물점수 높을때
          else if (mutualObj[[friends[i], friends[j]]] === mutualObj[[friends[j], friends[i]]] && eachObj[friends[i]] > eachObj[friends[j]]) gift++
        }
      }
      // 준게 없을때
      else {
        // 받은게 없고 선물 점수가 높을때
        if (!(mutualObj[[friends[j], friends[i]]]) && eachObj[friends[i]] > eachObj[friends[j]]) gift++
      }

    }
    if (gift > result) result = gift
  }
  return result
}