function splitAndMerge(string, separator) {
    let str = string.split(' ')
    console.log(str)
    let array = []
    for (let i = 0; i < str.length; i++) {
        array.push(str[i].split('').join(separator))
    }
    return array.join(' ')
}


console.log(   splitAndMerge(  "My name is John"," "  )    )