function amIWilson(p) {

    p = BigInt(p)

    function factorial(e) {
        return e ? e * factorial(e - 1n) : 1n;
    }
    let fact = factorial(p-1n)

    return (fact + 1n)%((p * p)) === 0n

}


console.log(amIWilson(563))