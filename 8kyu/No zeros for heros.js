function noBoringZeros(n) {
    let a = n.toString()
    let len = n.toString().length
    if (n === 0) return 0
    for (let i = len-1; i >= 0 ; i--) {

        if (a[i] == 0) {
          a = a.slice(0, i)
        } else {
          return  Number(a)
        }

    }
}


console.log(   noBoringZeros(1400)   )