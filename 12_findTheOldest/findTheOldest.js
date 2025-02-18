const findTheOldest = function(arr) {
    let nameOfOldest;
    let maxAge = 0;
    let d = new Date();
    d = d.getFullYear();
    for (let i=0; i<arr.length; ++i) {
        if (arr[i]['yearOfDeath'] == undefined) {
            arr[i]['yearOfDeath'] = d;
        }
        if ((arr[i]['yearOfDeath'] - arr[i]['yearOfBirth']) > maxAge) {
            maxAge = arr[i]['yearOfDeath'] - arr[i]['yearOfBirth'];
            nameOfOldest = arr[i];
        }
    }

    return nameOfOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
