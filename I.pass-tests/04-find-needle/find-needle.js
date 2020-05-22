function findNeedle(words,target) {
    for (let i=0;i<words.length;i++) {
        if (words[i]===target) {
            return i;
        };
    };
    return false;
}

module.exports = findNeedle;
