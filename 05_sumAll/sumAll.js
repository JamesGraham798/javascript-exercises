const sumAll = function(firstValue, secondValue) {
    let total = 0;
    let start, end;

    if ( firstValue < 0 || secondValue < 0) return 'ERROR';
    if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue)) return 'ERROR';
    
    if (firstValue < secondValue) {
        start = firstValue;
        end = secondValue;
    } else {
        start = secondValue;
        end = firstValue;
    }

    for (let i=start; i <= end; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
