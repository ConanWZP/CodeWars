function eliminateUnsetBits(number) {
    let b = number.split('')
    if (!b.includes('1')) return 0
    let a = number.replaceAll('0', '')
    return parseInt(a, 2)
}


console.log(  eliminateUnsetBits('11010101010101')    )