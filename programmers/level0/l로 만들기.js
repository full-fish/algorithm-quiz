function solution(myString) {
    return myString.split('').map((e) => e.charCodeAt() < 108 ? 'l' : e).join('')
}