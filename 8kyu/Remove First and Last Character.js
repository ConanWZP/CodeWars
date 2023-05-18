function removeChar(str){




    return str.split('').splice(1, str.length-2).join('')

}


console.log( removeChar('eloquent') )