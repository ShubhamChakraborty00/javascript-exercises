const palindromes = function (str) {
    let string = str.toLowerCase();
    let left = 0, right = string.length-1;
    while (left <= right) {
        if (string.at(left) == " " || string.at(left) == "." ||string.at(left) == "," ||string.at(left) == "!") {
            ++left;
            continue;
        }
        if (string.at(right) == " " || string.at(right) == "." ||string.at(right) == "," ||string.at(right) == "!") {
            --right;
            continue;
        }
        if (string.at(left) != string.at(right)) {
            return false;
        }
        ++left;
        --right;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
