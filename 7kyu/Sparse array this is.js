const test  = (array) => {

   let a = (Object.keys(array).length)
   let b = array.length
   if (a !== b) {
      return '[' + array.toString() + '] is a sparse array!'
   } else {
      return '[' + array.toString() + '] is not a sparse array!'
   }


}

console.log( test([,2,3]) )