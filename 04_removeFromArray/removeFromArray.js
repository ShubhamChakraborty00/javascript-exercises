const removeFromArray = function(arr, ...args) {
    let newarr = [];
    for (const element of arr)  {
        if (args.includes(element)) {
            continue;
        }
        newarr.push(element);
    }
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
