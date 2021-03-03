
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((acum, item, index) => index % 2 !== 0 ? [...acum, ...item.reverse()] : [...acum, ...item], []);
}
