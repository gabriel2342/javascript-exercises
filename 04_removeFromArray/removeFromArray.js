const removeFromArray = function(...elements) {
  const ourArray = elements[0];
  const resultArray = []; 
  ourArray.forEach((element) => {
    if (!elements.includes(element)) {
      resultArray.push(element);
    }
  })
  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
