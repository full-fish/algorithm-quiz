let routes = [[-20, -15], [-14, -5], [-18, -13], [-5, -3]]

function solution(routes) {
  let now = -30001
  let result = 0
  routes.sort((a, b) => a[1] - b[1])

  for (const route of routes) {
    // 아직 나가지 않음
    if (route[1] >= now) {
      // 출입이 되어 있는 상태
      if (now >= route[0]) {
        continue
      } else {
        now = route[1]
        result++
      }
    }
  }
  return result
}

console.log(solution(routes));


function solution2(routes) {
  let answer = 0;
  let startPoint = -30001;
  routes.sort((a, b) => a[1] - b[1])

  for (const routePoint of routes) {
    // 아직 나가지는 않았음
    if (routePoint[1] >= startPoint) {
      // 출입이 되어 있는 상태
      if (startPoint >= routePoint[0]) {
        continue;
      } else {
        startPoint = routePoint[1]
        answer++;
        //startPoint[1] = routePoint[1]
      }
    }
  }
  return answer
}
console.log(solution2(routes));