function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0]) {
      return db[i][1] === id_pw[1] ? 'login' : 'wrong pw'
    }
  }
  return 'fail'
}
