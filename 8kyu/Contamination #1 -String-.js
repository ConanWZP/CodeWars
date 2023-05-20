function contamination(text, char){

    if (text === '') {
        return ''
    } else if (char === '') {
        return ''
    } else {
        let a = ''
        for (let i = 0; i < text.length; i++) {
            a += char
        }
        return a
    }

}