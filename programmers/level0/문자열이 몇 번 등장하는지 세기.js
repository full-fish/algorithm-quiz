function solution(myString, pat) {
    return [...myString.matchAll(new RegExp(`(?=${pat})`, 'g'))].length
}