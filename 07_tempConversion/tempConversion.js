const convertToCelsius = function(fahr) {
  let cel = (fahr - 32) * 5/9;
  cel = Math.round(cel * 10)/10;
  return cel;
};

const convertToFahrenheit = function(cel) {
  let fahr = (cel * 9/5) + 32;
  fahr = Math.round(fahr * 10)/10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
