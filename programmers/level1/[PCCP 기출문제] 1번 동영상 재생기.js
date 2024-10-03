let video_len = "10:55"
let pos = "00:05"
let op_start = "00:15"
let op_end = "06:55"
let commands = ["prev", "next", "next"]

// 오프닝 레인지 안인지 처음과 커맨드 이후 확인

function solution(video_len, pos, op_start, op_end, commands) {
  function timeToSec(time) {
    let [min, sec] = time.split(":")
    return parseInt(min) * 60 + parseInt(sec)
  }

  let sec_video_len = timeToSec(video_len)
  let sec_pos = timeToSec(pos)
  let sec_op_start = timeToSec(op_start)
  let sec_op_end = timeToSec(op_end)
  let sec_now = sec_pos

  if (sec_op_start <= sec_pos && sec_pos <= sec_op_end) {
    sec_now = sec_op_end
  }

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "prev") {
      sec_now -= 10
      if (sec_now < 0) sec_now = 0
    }

    else if (commands[i] === "next") {
      sec_now += 10
      if (sec_now > sec_video_len) sec_now = sec_video_len
    }

    if (sec_op_start <= sec_now && sec_now <= sec_op_end) {
      sec_now = sec_op_end
    }

  }
  return `${~~(sec_now / 60)}`.padStart(2, "0") + ':' + `${sec_now % 60}`.padStart(2, "0")
}

console.log(solution(video_len, pos, op_start, op_end, commands)) 