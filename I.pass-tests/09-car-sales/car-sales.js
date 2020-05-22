function sales(carsSold) {
    var totals = {};
    for ( let i=0; i<carsSold.length;i++) {
        if (!totals.hasOwnProperty(carsSold[i].make)) {
            totals[carsSold[i].make] = carsSold[i].price
        } else {
            totals[carsSold[i].make]+= carsSold[i].price
        }
    }
    return totals
}
module.exports = sales;