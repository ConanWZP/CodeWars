function invert(array) {
    let a = []
    for (let i = 0; i < array.length; i++) {
        a.push(array[i]*(-1))
    }

    return a;
}