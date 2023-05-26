function smallWordHelper(sentence){
    let a = sentence.split(' ')
    let regX = /a|e|i|o|u|/gi
    let b = a.map((e) => {
        if (e.length <= 3) {
            return e.toUpperCase()
        } else  {

              return   e.replace(regX, '')


        }

    } )



    return b.join(' ')
}

console.log(  smallWordHelper("The quick brown fox jumps over the lazy dog")    )
/*
let regX = /a|e|i|o|u|y/gi
let a = 'abcasdeig'.replace(regX, '')
console.log( a )*/
