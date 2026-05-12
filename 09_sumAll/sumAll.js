const sumAll = function(a, b) {
    let sum = 0;
        if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number" || 
            a % 1 !== 0 || b % 1 !== 0) {
        return "ERROR";
    }
    let bigger = Math.max(a, b);
    let smaller = Math.min(a, b);
    for (i = smaller; i <= bigger; i++) {
            sum += i;
        }
    return sum;
};

console.log(sumAll(10, "90"));
    
// Do not edit below this line
module.exports = sumAll;
