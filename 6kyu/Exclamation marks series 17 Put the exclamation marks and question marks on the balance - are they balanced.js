function balance(left,right){
    const leftSum = left.split('').reduce((acc, item) => {
        if (item === '!') {
            acc += 2
        } else {
            acc += 3
        }
        return acc
    }, 0)

    const rightSum = right.split('').reduce((acc, item) => {
        if (item === '!') {
            acc += 2
        } else {
            acc += 3
        }
        return acc
    }, 0)

    return leftSum > rightSum ? 'Left' : leftSum < rightSum ? 'Right' : 'Balance'


}


console.log(   balance("!!???!????","??!!?!!!!!!!")   )