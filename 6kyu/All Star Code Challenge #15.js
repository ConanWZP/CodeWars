function rotate(str){
    let arrayStr = str.split('')
    let array = []

    for (let i = 0; i < str.length; i++) {
        let letter = arrayStr.shift()

        arrayStr.push(letter)
        arrayStr = arrayStr.join('')

        array.push(arrayStr)
        arrayStr = arrayStr.split('')
    }

    return array

}

console.log(  rotate('Hello')   )