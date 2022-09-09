function solution(a, b) {
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let days = 0;

  for (let i = 0; i < a; i++) {
    days += month[i];
  }
  days += b;

  return weeks[days % 7];
}
console.log(solution(5, 24));
