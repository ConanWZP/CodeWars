function isDivisible(){


    for (let i = 1; i < [...arguments].length ; i++) {
        if ([...arguments][0] % [...arguments][i] ) return false
    }
    return true
}


console.log(    isDivisible(3,3,4)    )