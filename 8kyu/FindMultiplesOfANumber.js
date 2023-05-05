function findMultiples(integer, limit) {
    let array = []
    for (let i = 1; i <= limit/integer; i++) {
        array.push(integer*i)
    }
    //console.log(array)
    return array

}

findMultiples(4, 27)