function nthChandosNumber(n) {
    //coding and coding..

    let sum = 0;
    let array = n.toString(2).split('').reverse()
    console.log(array)
    for (let i = 0; i < array.length; i++){
        sum += 5**(i+1) * array[i]
    }
    return sum
}

console.log(    nthChandosNumber(23)     )