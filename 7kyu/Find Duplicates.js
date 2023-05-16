/*function duplicates(arr) {
    let array = []



    for (let i = 0; i < arr.length; i++) {
        let a = arr.filter((el) => el === arr[i])
        //console.log(a, 'a')
        if (a.length > 1) {
            array.push(a[0])
            arr = arr.filter((el) => el !== arr[i])
        }
    }


    return array
}*/

function duplicates(arr) {
    let array = []
    let extra = []


    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i])
        let a = array.filter((el) => el === arr[i])

        if (a.length ===2) {

            extra.push(arr[i])

        }

    }

    return extra
}

console.log(  duplicates([1, 2, 3, 3, 2, 1])  )