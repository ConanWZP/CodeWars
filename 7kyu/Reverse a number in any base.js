function reverseNumber(n, b){
    n = Number(n)
    b = Number(b)
    if (b === 1) {
        n = BigInt(n)
        return n
    } else if (b > 36) {
        n = BigInt(n)
        return n
    } else {
        let c = n.toString(b).split('').reverse().join('')
        console.log(c)
        let d = parseInt(c, b)
        d = BigInt(d)
        return d;
    }

}


console.log(   reverseNumber(5, 1)   )