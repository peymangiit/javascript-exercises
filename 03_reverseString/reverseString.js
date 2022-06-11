const reverseString = function(str) {
    if (str !== NaN) {
       let newstr = str.toString().split('').reverse().join('');
       return newstr;
    }else if (str === ''){
        return newstr = '';
    }else {
        return newstr = str.split('').reverse().join('');
    
}

};

// Do not edit below this line
module.exports = reverseString;
