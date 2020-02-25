
module.exports = function towelSort (matrix) {
  let array = [];
  if (!matrix || matrix.length < 1 ) {
    return [];  
  }
  for (let i=0; i<matrix.length; i++) {
      if (i%2 !== 0) {
          array = array.concat(matrix[i].reverse());
      } else {
        array = array.concat(matrix[i]);
      }
    } 
return array;
}
