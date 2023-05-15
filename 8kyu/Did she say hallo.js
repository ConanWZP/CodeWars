function validateHello(greetings) {

    let array = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']


    for (let i = 0; i < array.length; i++) {
        let str = greetings.toLowerCase()
        if (str.includes(array[i])) {
            return true
        }
    }
    return false

}

console.log(validateHello('heLLO: wie; lA: HOMBRE: ArE? ViSTA; viSTa, yOu, haSTA, hOw? TScHuSS HEldLO, lA TscHUSs; Are: HOmBrE BIeN. HoW'))