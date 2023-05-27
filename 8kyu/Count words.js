function countWords(str) {
    let regx = /﻿/g

    let b = str.replace(regx, ' ')

    let arr = []
    if (b === '') {
        return 0
    }
    /*let regSp = / /*/


    let a = b.split(' ')
    console.log(a)
    for (let i = 0; i < a.length; i++) {
        console.log(a[i])
        if (a[i] == ' ') {
            console.log('Пробел найден')
        }
        if (a[i] !== '') {
            arr.push(a[i])
        }
    }


    return arr.length
}

console.log(  countWords("Hello﻿World") )