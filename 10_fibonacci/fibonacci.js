const fibonacci = function(n) {
    if (n < 0 ){
        return "OOPS"
    }else if (typeof(n)=="string"){
        n= Number(n);
    }
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    return result[n];
};

// Do not edit below this line
module.exports = fibonacci;
