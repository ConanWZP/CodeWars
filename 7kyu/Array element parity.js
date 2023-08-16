function solve(arr){
    let array = []

    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(arr[i]*(-1))) {
            array.push(arr[i])
        }
    }

    return array[0]
}

console.log(    solve([-110,110,-38,-38,-62,62,-38,-38,-38])      )