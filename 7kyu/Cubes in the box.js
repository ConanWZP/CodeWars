function f(x, y, z) {
    let count = 0
    let minimum = Math.min(x, y, z)
    for (let i = 1; i <= minimum; i++) {
        if (i === 1) {
            count += x*y*z
        } else {
            count += (x+1-i) * (y+1-i) * (z+1-i)
        }
    }

    return count

}


console.log(    f(3, 3, 3)    )