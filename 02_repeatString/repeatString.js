
const repeatString = function(str,num) {
    if(num === 0 || str===''){
       return str=''
    }else if(num === -1){
         return "ERROR";
    }else {
        return str.repeat(num);
    }
};

// Do not edit below this line
module.exports = repeatString;
