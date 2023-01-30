function solution(my_string) {
  const trash = ['a', 'e', 'i', 'o', 'u']
  return my_string
    .split('')
    .filter((ele) => !trash.includes(ele))
    .join('')
}
