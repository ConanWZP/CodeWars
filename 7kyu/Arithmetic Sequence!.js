const nthterm = (first, n, c) => {
    let array = [first]
    for (let i = 1; i <= n; i++) {
        first += c
        array.push(first)
    }

    return array[n]
}


console.log(   nthterm(1, 2, 3)       )