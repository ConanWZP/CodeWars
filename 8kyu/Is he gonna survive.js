function hero(bullets, dragons){
    if (dragons === 0) {
        return true
    }
    return bullets/dragons >= 2
}

console.log()