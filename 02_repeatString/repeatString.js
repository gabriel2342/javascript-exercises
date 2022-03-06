const repeatString = function(string, num) {
  result = ""
  i = 0
  if (num < 0) return "ERROR"
  while (i < num) {
  result = result + string;
  i++
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
