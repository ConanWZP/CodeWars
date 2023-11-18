function revrot(str, sz) {
    let array = []
    let extraArray = []
    if (str.length / sz >= 1 && sz > 0) {
        for (let i = 0; i <= str.length; i = i + sz) {

            if (str.length - i >= sz) {
                array.push(str.slice(i, i + sz))
            }
        }
        for (let i = 0; i < array.length; i++) {
            let sum = 0;
            for (let j = 0; j < sz; j++) {
                sum += array[i][j] ** 3
            }
            if (sum % 2 === 0) {
                extraArray.push(array[i].split('').reverse().join(''))
            } else {
                let firstElement = array[i].split('').shift()
                let otherElement = array[i].slice(1).split('')
                otherElement.push(firstElement)
                extraArray.push(otherElement.join(''))
            }

        }
        return extraArray.join('')

    } else {
        return ''
    }
}

console.log(revrot("563000655734469485", 4))
console.log(['234561', '356789'])