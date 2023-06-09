function maps(x){
    let a = [...x]
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i]*2
    }
    return a
}