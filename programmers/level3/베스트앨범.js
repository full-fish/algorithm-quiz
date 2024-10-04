let genres = ["classic", "pop", "classic", "classic", "pop"]
let plays = [500, 600, 150, 800, 2500]

function solution(genres, plays) {
  let result = []
  let genresObj = {}
  for (let i = 0; i < genres.length; i++) {
    if (genres[i] in genresObj) {
      genresObj[genres[i]].total += plays[i]
      genresObj[genres[i]].info.push([i, plays[i]])
    } else {
      genresObj[genres[i]] = { total: plays[i], info: [[i, plays[i]]] }
    }
  }

  let genresArr = Object.entries(genresObj).sort((a, b) => b[1].total - a[1].total)
  genresArr.forEach(genre => {

    genre[1].info.sort((a, b) => b[1] - a[1]);

    let num = 2
    if (genre[1].info.length === 1) {
      num = 1
    }

    for (let i = 0; i < num; i++) {
      result.push(genre[1].info[i][0]);
    }
  });
  return result
}

console.log(solution(genres, plays));
