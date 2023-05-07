function abbrevName(name){
    let firstLetter = name[0].toUpperCase()
    let familyLetterMinusOneIndex = name.indexOf(' ')
    let familyLetter = name[familyLetterMinusOneIndex+1].toUpperCase()
    return firstLetter + "." + familyLetter
}

console.log(abbrevName('john Connor')) // J.C