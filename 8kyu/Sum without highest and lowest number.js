function sumArray(array) {

    if (array && array.length > 2) {

        let arr = array.sort((a, b) => a-b)
        console.log(arr)
        let sum = 0
        for (let i = 1; i < arr.length-1; i++) {
            sum += arr[i]
        }

        return sum

    } else {
        return 0
    }
}


console.log(      )