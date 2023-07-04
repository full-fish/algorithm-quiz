function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    let queue = [[begin, 0]];

    while (queue.length > 0) {
        let [current, level] = queue.shift();
        if (current === target) return level;

        for (let word of words) {
            if (oneDiff(current, word)) {
                queue.push([word, level + 1]);
                words = words.filter(w => w !== word);
            }
        }
    }
    return 0;
}

function oneDiff(word1, word2) {
    let diffs = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diffs++;
    }
    return diffs === 1;
}
