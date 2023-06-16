function findArray(arr1, arr2){
    let array = []

    if (arr1.length === 0 || arr2.length === 0) return []

    for (let i = 0; i < arr2.length; i++) {

        array.push(arr1[arr2[i]])
    }

    return array
}

console.log(  findArray(   [0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]        )  )
