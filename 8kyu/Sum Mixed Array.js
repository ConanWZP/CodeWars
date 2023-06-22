function sumMix(x){
    let a = x.map((e) => Number(e))

    return a.reduce((b, c) => b+c, 0)
}


console.log(    sumMix(    [9, 3, '7', '3']       )     )