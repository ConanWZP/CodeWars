function amIWilson(p) {

    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }
    let fact = factorial(p-1)

    let check = (fact + 1)/((p * p))
    return Number.isInteger(check);

}


console.log(amIWilson(5))