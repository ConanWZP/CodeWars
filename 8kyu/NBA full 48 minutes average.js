function pointsPer48(ppg, mpg) {
    if (ppg === 0 || mpg === 0) {
        return 0
    }
    let num = ppg*48/mpg
    return +num.toFixed(1)
}


console.log(  pointsPer48(5, 17)   )