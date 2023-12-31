function twoDecimalPlaces(number) {

    const string = number.toString()
    const array = string.split('')
    const indexDot = array.indexOf('.')


    return Number(array.slice(0, indexDot+3).join(''))
}


console.log(    twoDecimalPlaces(10.1289767789)     )