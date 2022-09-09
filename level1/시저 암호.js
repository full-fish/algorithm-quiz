function solution(str, shiftNumber) {
  let shift = shiftNumber % 26;
  let resultArr = [];
  let unicodeArr = [];
  for (let i = 0; i < str.length; i++) {
    const unicode = str[i].charCodeAt(0);
    let a = 0;
    if (/[A-Z]/.test(str[i])) {
      if (unicode + shift > 90) a = 26;
      unicodeArr.push(unicode + shift - a);
    } else if (/[a-z]/.test(str[i])) {
      if (unicode + shift > 122) a = 26;
      unicodeArr.push(unicode + shift - a);
    } else unicodeArr.push(unicode);
  }
  unicodeArr.forEach((ele) => resultArr.push(String.fromCharCode(ele)));
  return resultArr.join("");
}
