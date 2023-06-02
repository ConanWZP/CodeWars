function solve(arr) {
    /*let extraArray = [...arr]*/
    let array = []

    for (let i = arr.length-1; i >= 0; i--) {


        let a = arr.indexOf(arr[i], i+1)
        if (i === arr.length-1) array.push(arr[i])
        if (a === -1 && i !== arr.length-1) {
            array.push(arr[i])
        }
        console.log(a, i, `Индекс, элемента ${arr[i]}`)
    }
    return array.reverse();
}

console.log(  solve([3,4,4,3,6,3])   )