const fizzBuzz = n => n%3 === 0 && n%5 === 0 ? 'FizzBuzz' : (n%3===0) ? 'Fizz' : (n%5===0) ? 'Buzz' : n

   /*switch (n) {
       case (n%3 === 0 && n%5 === 0):
           return 'FizzBuzz'
       break
       case (n%3===0):
           return 'Fizz'
           break
       case (n%5===0):
           return 'Buzz'
           break
       default: return n
       break;
   }*/


console.log(fizzBuzz(15))