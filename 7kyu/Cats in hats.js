function height(n) {
    let h = 2000000
    //return h.toFixed(2)

    for (let i = 1; i <= n; i++) {
        let step = 2000000 / (2.5**i)
        h += step
        console.log(h)
    }

    return h.toFixed(3)

}
