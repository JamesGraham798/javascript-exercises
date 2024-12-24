const reverseString = function(string) {
    let newString = '';
    let stringLength = string.length;

    for (i = 1; i <= stringLength; i++) {
        let letter = string[stringLength - i];
        newString += letter;
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
