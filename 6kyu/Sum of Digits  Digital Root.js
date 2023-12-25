function digitalRoot(n) {
    const arr = n.toString().split('').map(e => +e)

    if (arr.length <= 1) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    } else {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return digitalRoot(sum)
    }

}


console.log(   digitalRoot(493193)   )