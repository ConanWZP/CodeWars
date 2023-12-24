function dashatize(num) {

    let string = Math.abs(num).toString()
    if (string.length === 1) return string
    const arr = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] % 2 !== 0) {
            if (i === 0) {
                arr.push(string[i])
                arr.push('-')
            } else if (i === string.length - 1) {
                if (arr[arr.length - 1] !== '-') arr.push('-')
                arr.push(string[i])
            } else {
                if (arr[arr.length - 1] !== '-') arr.push('-')
                arr.push(string[i])
                arr.push('-')
            }
        } else {
            arr.push(string[i])
        }
    }

    return arr.join('')
}

console.log(  dashatize(974302)    )