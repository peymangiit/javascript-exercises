const ftoc = function(fah) {
 let  celsius = (fah - 32) * (5/9);
  celsius = Math.round(celsius *10) / 10;
 return celsius; 
};

const ctof = function(cel) {
  let fahrenhiet = (cel * (9/5)) + 32;
  fahrenhiet = Math.round(fahrenhiet *10) / 10;
  return fahrenhiet;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
