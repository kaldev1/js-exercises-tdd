var getWordLengths = function(someWords) {
    const result = []
    someWords.forEach((item) => result.push(item.length))
    return result
};

module.exports = getWordLengths;
