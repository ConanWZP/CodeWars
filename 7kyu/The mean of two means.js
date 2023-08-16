function getMean(arr, x, y) {
    if (x > 1 && y >1 && x <= arr.length && y <= arr.length) {

        let firstArray = arr.filter((el, index) => index < x )
        let secondArray = arr.reverse().filter((el, index) => index < y )

        let first = firstArray.reduce((a, b) => a + b) / firstArray.length
        let second = secondArray.reduce((a, b) => a + b) / secondArray.length
        return (first + second) / 2
    } else {
        return -1
    }
}

console.log(     getMean(    [1,3,2],2,2   )      )