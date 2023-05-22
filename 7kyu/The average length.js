function averageLength(array) {
    let c = 0

    let arr = array
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        c += arr[i].length
    }
    let b = Math.round(c / array.length)
    console.log(b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < b) {

                console.log(b-arr[i].length, `для ${arr[i][0]}`)
            let a = arr[i]
            for (let j = 0; j < b-arr[i].length; j++) {
                a += arr[i][0]
                console.log(arr[i])
                    //console.log(j)
            }
            arr[i] = a


        } else if (arr[i].length > b) {
            arr[i] = arr[i].slice(0, b)
        }
    }


    return new Array(...arr)



}

console.log( averageLength([ 'vvvvvv', 'nnnnnnnnn', 'l', 'ttttttt', 'oo', 'hhh', 'llllllll' ])  )