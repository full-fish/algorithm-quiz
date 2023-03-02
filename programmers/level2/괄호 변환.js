function solution(p) {
  function re(p, u, v) {
    if (p === '') return ''
    let makeUCount = 0
    for (let x of p) {
      if (x === '(') {
        makeUCount++
      } else makeUCount--
      u += x
      if (makeUCount === 0) break
    }
    v = p.slice(u.length)
    let s = []
    for (let x of u) {
      if (x === '(') s.push(x)
      else {
        if (s.pop() === '(') return u + re(v, '', '')
        else {
          let str = `(${re(v, '', '')})`
          for (let i = 0; i < u.length; i++) {
            if (i !== 0 && i !== u.length - 1) {
              u[i] === '(' ? (str += ')') : (str += '(')
            }
          }
          return str
        }
      }
    }
  }
  return re(p, '', '')
}

//! 다른사람 코드
function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split('')
    .map(c => (c === '(' ? ')' : '('))
    .join('')
}

function solution(p) {
  if (p.length < 1) return ''

  let balance = 0
  let pivot = 0
  do {
    balance += p[pivot++] === '(' ? 1 : -1
  } while (balance !== 0)

  const u = p.slice(0, pivot)
  const v = solution(p.slice(pivot, p.length))

  if (u[0] === '(' && u[u.length - 1] == ')') return u + v
  else return '(' + v + ')' + reverse(u)
}
