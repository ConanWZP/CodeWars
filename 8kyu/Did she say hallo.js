function validateHello(greetings) {

    let array = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    let count = 0

    for (let i = 0; i < array.length; i++) {
        let str = greetings.toLowerCase()
        if (str.includes(array[i])) {
            count++
        }
    }

    return count > 0
}

console.log(validateHello('heLsLO: wie; lA: HOMBRE: ArE? ViSTA; viSTa, yOu, haSTA, hOw? TScHuSS HEldLO, lA TscHUSs; Are: HOmBrE BIeN. HoW'))