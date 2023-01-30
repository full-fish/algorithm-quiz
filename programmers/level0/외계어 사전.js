function solution(spell, dic) {
  let spellStr = spell.sort().join('')
  for (let i = 0; i < dic.length; i++) {
    if (dic[i].split('').sort().join('') === spellStr) return 1
  }
  return 2
}

function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2
}
let spell = ['z', 'd', 'x']
let dic = ['def', 'dww', 'dzx', 'loveaw']
console.log(solution(spell, dic))
