function removeMiddle(words) {
    let indexToRemove=parseInt((words.length-1)/2);
    const result = [words[indexToRemove]];
    words.splice(indexToRemove,1);
    return result;
}

module.exports =  removeMiddle;