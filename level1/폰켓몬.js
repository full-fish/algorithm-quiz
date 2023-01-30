//전체에서 중복되지 않은것을 센후 half보다 많으면 half 출력, 적으면 그값 출력
/*function solution(nums) {
    var answer = 0;
    let notsame = [...new Set(nums)].length;
    let half = nums.length/2;
    
    if(notsame > half){
        answer = half;
    }
    else{
        answer = notsame;
    }
    return answer;
}*/

function solution(nums) {
  var answer = 0
  let notsame = Array.from(new Set(nums)).length
  let half = nums.length / 2

  if (notsame > half) {
    answer = half
  } else {
    answer = notsame
  }
  return answer
}
