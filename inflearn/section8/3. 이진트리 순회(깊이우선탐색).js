//! 레퍼런스 : 강의들어보기
function solution2(n) {
  let answer = ''
  function DFS(v) {
    if (v > 7) return
    else {
      answer += v + ' '
      DFS(v * 2)
      DFS(v * 2 + 1)
    }
  }
  DFS(n)
  return answer
}
console.log(solution2(1))

//! 내가한거
class Tree2 {
  constructor(value, level = 0) {
    this.value = value
    this.left = null
    this.right = null
    this.level = level
  }
  insert(value, parent = {}) {
    let node = this
    if (node.left === null) node.left = new Tree2(value, this.level + 1)
    else if (node.right === null) node.right = new Tree2(value, this.level + 1)
    else {
      const now = this
      if (Object.keys(parent).length > 0) {
        if (node.right === null) this.insert(value, now)
        else if (parent.right.right === null) parent.right.insert(value, parent)
        else node.left.insert(value, now)
      } else node.left.insert(value, now)
    }
  }
  //tree를 전위 순회 합니다.
  preorder(callback) {
    callback(console.log(this.value))
    if (this.left) {
      this.left.preorder(callback)
    }
    if (this.right) {
      this.right.preorder(callback)
    }
  }
  // tree를 중위 순회 합니다
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback)
    }
    callback(console.log(this.value))
    if (this.right) {
      this.right.inorder(callback)
    }
  }
  //tree를 후위 순회 합니다
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback)
    }
    if (this.right) {
      this.right.postorder(callback)
    }
    callback(console.log(this.value))
  }
}
let tree2 = new Tree2(1)
tree2.insert(2)
tree2.insert(3)
tree2.insert(4)
tree2.insert(5)
tree2.insert(6)
tree2.insert(7)
tree2.preorder(() => {})
