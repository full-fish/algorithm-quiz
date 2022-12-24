function solution(skill, skill_trees) {
  let obj = {}
  skill.split('').forEach((ele, index) => (obj[ele] = index))
  return skill_trees
    .map(ele => {
      let reg = new RegExp(`${skill.split('').join('|')}`, 'g')
      if (!ele.match(reg)) return [0]
      return ele.match(reg).map(ele => obj[ele])
    })
    .filter(ele => ele.every((ele, i) => ele === i)).length
}
console.log(solution('CBD', ['AEF', 'ZJW']))
