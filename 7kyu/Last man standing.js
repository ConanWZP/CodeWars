function lastManStanding(n){
    let array = []

    for (let i = 1; i <= n; i++) {
        array.push(i)
    }

    while (array.length > 1) {
       let extraArray = []

        for (let i = 1; i < array.length; i+=2) {
            extraArray.push(array[i])
        }
        array = extraArray.reverse()


    }

    return array[0]
}

console.log(   lastManStanding(1000)     )