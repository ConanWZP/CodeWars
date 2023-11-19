function sortCards(arr){
    const obj = {
        'A': 1,
        'T': 10,
        'J': 11,
        'Q': 12,
        'K': 13
    }
    const alterObj = {
        1: 'A',
        10: 'T',
        11: 'J',
        12: 'Q',
        13: 'K'
    }
    const array = arr.map((el) => obj[el] ? obj[el] : el)

    return array.sort((a,b) => a-b).map((el) => alterObj[el] ? alterObj[el] : el)
}

console.log(   sortCards( ["J","J",2,"T",9,6] )    )