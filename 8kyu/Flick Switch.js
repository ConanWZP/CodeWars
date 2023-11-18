function flickSwitch(arr){
    let value = true
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            value = !value
        }
        array.push(value)
    }
    return array
}