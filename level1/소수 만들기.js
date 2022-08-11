let nums = [1, 2, 7, 6, 4];
let result = 4;
function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) count++;
      }
    }
  }
  return count;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  //짝수중 2는 유일한 소수
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }

  const sqrt = parseInt(Math.sqrt(num));

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(solution(nums));
// for i in Range(0, len(data)-2):
//     gpoal = data[0]+data[1]+data[2]
