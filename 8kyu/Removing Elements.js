function removeEveryOther(arr){
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            array.push(arr[i])

        }
    }
    return array
}


console.log( removeEveryOther([1, 2, 1, 2, 1, 2])  )