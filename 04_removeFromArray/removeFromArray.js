const removeFromArray = function(array, ...elements) {

const fileredArray = array.filter((item) => !elements.includes(item));

return fileredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
