var number=function(array){
    let a = []
    for (let i = 0; i < array.length; i++) {
        a.push(`${i+1}: ${array[i]}`)
    }
    return a

}