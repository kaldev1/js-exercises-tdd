function paintShop(cars,color) {
    let result= JSON.parse(JSON.stringify(cars))
    for ( let i=0;i<cars.length;i++) {
        if (cars[i].make == "Ford") {
            result[i].colour = color;
        } ;
    }
    return result;
}
module.exports = paintShop;