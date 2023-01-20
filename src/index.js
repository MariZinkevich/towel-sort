
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let result = [];
   if(arguments.length) {
      for(let i = 0; i < matrix.length; i++) {
         if(i % 2) {        
            result = result.concat(matrix[i].reverse());
         } else {
            result = result.concat(matrix[i]);
         }     
      }
      return result;
   } else {
      return [];
   }  
}
