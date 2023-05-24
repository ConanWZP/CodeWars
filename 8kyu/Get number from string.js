function getNumberFromString(s) {
    let reg = /\d/g
    let a = s.match(reg)
    return +a.join('')
}

console.log( getNumberFromString("this is number: 7") )