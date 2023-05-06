function digitize(n) {
    let array = [];
    let str = n.toString()

    let strLength = str.length;

    for (let i = 0; i < strLength; i++) {
        let number = Number(str.slice(i, i+1))
        array.push(number)
    }
    array.reverse()

    return array
}

console.log(digitize(123456))