function hasUniqueChars(str){
    const secondString = [...new Set(str.split(''))].join('')
    return secondString === str
}

console.log(hasUniqueChars("  nAa"))


