// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
    let counter=0;
    let total=0;
    for (let i of numbers) {
        if (typeof i === 'number') {
            counter+=1;
            total+=i;
        }
    }
    return total/counter
}
module.exports = average;