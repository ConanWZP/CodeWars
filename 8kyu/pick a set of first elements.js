function first(arr, n = 1) {
    return arr.filter((e, index) => index < n)
}


console.log(   first(['a', 'b', 'c', 'd', 'e'], 4)   )