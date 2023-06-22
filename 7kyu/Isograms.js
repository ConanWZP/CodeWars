function isIsogram(str){
    if (str === '') return true
    let string = str.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        if (  string.includes(string[i], i+1) ) return false
    }

    return true



}


console.log(  isIsogram('aba')  )