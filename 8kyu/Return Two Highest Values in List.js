function twoHighest(arr) {
    let c = arr.sort( (a,b) => b-a )
    let a = []
    for (let i = 0; i < c.length; i++) {
        if (c[i] !== c[i+1]) {
            a.push(c[i])
        }
    }


    return a.slice(0, 2)
}


console.log(  twoHighest([15, 20, 20, 17])  )   // Ответ должен быть [20, 17]