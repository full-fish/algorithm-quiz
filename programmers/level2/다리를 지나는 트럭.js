let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];
function solution(bridge_length, weight, truck_weights) {
  let bridgeTemp = Array(bridge_length).fill(0);
  let second = 0;
  while (truck_weights.length > 0) {
    bridgeTemp.unshift(0);
    bridgeTemp.pop();
    const bridgeTempSum = bridgeTemp.reduce(function add(sum, cur) {
      return sum + cur;
    }, 0);
    if (bridgeTempSum + truck_weights[0] <= weight) {
      bridgeTemp[0] = truck_weights.shift();
    }
    second++;
  }
  return second + bridge_length;
}
solution(bridge_length, weight, truck_weights);
