function decode  (code, n) {
    const dictionary = {}
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alph.length; i++) {
        dictionary[i+1] = alph[i]
    }
    let word = ''
    const nArray = n.toString().split('')
    for (let i = 0; i < code.length; i++) {
        const x = i >= nArray.length ? i % nArray.length : i
        word += dictionary[  code[i] - nArray[x]  ]
    }

    return word

}


console.log(decode([ 20, 12, 18, 30, 21], 1939))