const sumAll = function (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        return 'ERROR';
    if (num1 < 0 || num2 < 0)
        return 'ERROR';
    let result = Math.min(num1, num2);
    for (let i = result + 1; i <= Math.max(num1, num2); i++)
        result += i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
