function numbersWithDigitInside(x, d) {
    let numbers = []
    for (let i = 1; i <= x; i++) {
        if (i.toString().includes(d.toString())) {
            numbers.push(i)
        }
    }
    return numbers.length !== 0 ? [numbers.length, numbers.reduce((acc, el) => acc + el, 0), numbers.reduce((acc, el) => acc * el, 1)] : [0, 0, 0]
}


console.log(   numbersWithDigitInside(7,6)    )