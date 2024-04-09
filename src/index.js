
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if(arguments.length) {
      return matrix.reduce((result, currentValue, index)=>{
         return index % 2  
         ? result.concat(currentValue.reverse()) 
         : result.concat(currentValue);
      }, []);     
   } else {
      return [];
   }  
}
