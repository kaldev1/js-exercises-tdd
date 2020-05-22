module.exports = function(numbers) {
    const result = []
    // for (let i=0;i<numbers.length;i++) {
    //     result.push(numbers[i]+1);
    // };
    numbers.forEach((item) => result.push(item+1) )
    return result
};
