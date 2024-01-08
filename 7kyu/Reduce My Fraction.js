function reduce(fraction) {

  // return [fraction[0]/greaterCommonDivider(fraction[0], fraction[1]), fraction[1]/greaterCommonDivider(fraction[0], fraction[1])]


}

console.log(   reduce([60, 20])   )


// поиск наибольшего общего делителя

const greaterCommonDivider = (x,y) => {

    if (y <= 0) {
        return x
    } else {
       return greaterCommonDivider(y, x % y)
    }

}

console.log(greaterCommonDivider(45, 120))

/*const gcd = (a, b) => b ? gcd(b, a % b) : a;
console.log(gcd(45, 120))*/

console.log(  0? 'as' : 'ds'       )

console.log(0%0)