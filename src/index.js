
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if(arguments.length) {
      matrix.forEach((element, index) => {
         index % 2 ? element.reverse() : element;
      });
         return matrix.flat();     
   } else {
      return [];
   }  
}
