function stringy(size) {
    let str = ''
    for (let i=1; i <= size; i++) {
        if (i % 2 === 0) {
            str += '0'
        } else {
            str += '1'
        }
    }
    return str
}

console.log(  stringy(4)  )