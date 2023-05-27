function sumOfN(n) {
    let array = [0]
    let c = 0
    for (let i = 1; i < Math.abs(n) +1; i++) {
        c += i
        if (n < 0) {
            array.push(c*(-1))
        } else {
            array.push(c)
        }

    }
    return array

}

console.log(  sumOfN(-5) )