const sumAll = function(start, final) {
  const ourArray = [];
  const ourEnd = final;
  
  
  if (start < 0 || final < 0 || !Number.isInteger(start) || !Number.isInteger(final) ){
    return "ERROR"
  }
  else if (start > final) {
    final = start;
    start = ourEnd;
  }
  
  for (let i = start; i <= final; i++) { ourArray.push(i);}
  const finalSum = ourArray.reduce((a, b) => a + b, 0);

  return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
