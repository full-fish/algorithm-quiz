let survey = ["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5];
// let surveyList = ["RT", "CF", "JM", "AN", "TR", "FC", "MJ", "NA"];
function solution(survey, choices) {
  let surveyList = ["RT", "CF", "JM", "AN", "TR", "FC", "MJ", "NA"];
  let score = [0, 0, 0, 0];
  let result = "";
  for (let i = 0; i < choices.length; i++) {
    if (surveyList.indexOf(survey[i]) < 4) {
      score[surveyList.indexOf(survey[i])] += choices[i] - 4;
    } else {
      score[surveyList.indexOf(survey[i]) - 4] += 4 - choices[i];
    }
  }
  for (let i = 0; i < score.length; i++) {
    if (score[i] > 0) result += surveyList[i][1];
    else result += surveyList[i][0];
  }
  return result;
}
console.log(solution(survey, choices));
//RT,CF,JM,AN
