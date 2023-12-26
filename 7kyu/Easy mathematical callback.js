
function processArray(arr, callback) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    return newArr
}


console.log(
    processArray(
        [4, 8, 2, 7, 5],
        function (a) {
            return a * 2
        }
    )
)