function solution(files) {
  return files.sort((a, b) => {
    let [, headA, numberA, tailA] = [...a.match(/(\D+)(\d{1,5})(.*)/)]
    let [, headB, numberB, tailB] = [...b.match(/(\D+)(\d{1,5})(.*)/)]
    return headA.toLowerCase() > headB.toLowerCase() ? 1 : headA.toLowerCase() < headB.toLowerCase() ? -1 : numberA - numberB
  })
}
