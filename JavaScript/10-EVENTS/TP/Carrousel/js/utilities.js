// Gen random integer (min et max include)
function getRand(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}