const removeFromArray = function (input, ...filters) {

    let result = input

    for (const filter of filters) {
        result = result.filter((item) => item !== filter);

    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
