function remove (string) {
    const arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {

        const word = arr[i].split('')
        for (let j = word.length-1; j >=0; j--) {
            if (word[j] === '!') {
                word.pop()
            } else {
                break
            }
        }
        arr[i] = word.join('')
    }
    return arr.join(' ')
}


console.log(remove('!!!Hi !!hi!!! !hi'))