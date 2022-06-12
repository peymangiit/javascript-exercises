const removeFromArray = function(arr, ...Arrgs) {
    
    Arrgs.forEach(arg => {  
      arr.forEach (x => {
    
        if (x === arg) {
          arr.splice(arr.indexOf(x),1);
        };
      });
    });
 return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
