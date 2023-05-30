function remainder(n, m){
    if (n > m ) {
        if (m === 0) {
            return NaN
        } else {
            return n%m
        }
    } else {
        if (n===0) {
            return NaN
        } else {
            return m%n
        }
    }

}