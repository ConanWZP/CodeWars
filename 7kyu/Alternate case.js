function alternateCase(s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if ( s[i].toUpperCase() === s[i] ) {
            str += s[i].toLowerCase()
        } else {
            str += s[i].toUpperCase()
        }
    }
    return str;
}


console.log(  alternateCase("Hello World")   )