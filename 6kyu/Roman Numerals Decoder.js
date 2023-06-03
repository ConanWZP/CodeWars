function solution (roman) {
    let sum = 0;
    let numbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
   // let array = roman.split('')
   // let d = array.map((e) => e === numbers[e])
    for (let i = 0; i < roman.length; i++) {
        if (   numbers[roman[i]] < numbers[roman[i+1]]    ) {
            sum += (numbers[roman[i+1]] - numbers[roman[i]])
            i++
        } else {
           sum += numbers[roman[i]]
        }


    }

    // complete the solution by transforming the
    // string roman numeral into an integer
    return sum;
}


console.log(   solution('MCMXC')     )