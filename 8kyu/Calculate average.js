function findAverage(array) {
    if (array.length === 0) {
        return 0
    }
    let a = 0
    for (let i = 0; i < array.length; i++) {
        a += array[i]
    }


    return a/array.length;
}


console.log( findAverage([1,2,3,4])  )