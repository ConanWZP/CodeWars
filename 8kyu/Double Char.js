function doubleChar(str) {

    let a = str.split('').map((el) => el + el).join('')
    console.log(a)
}


console.log(     doubleChar('abcd')   )