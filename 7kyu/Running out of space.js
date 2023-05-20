function spacey(array){
    let ar = []

    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            ar.push(array[i])
        } else {
            ar.push(`${ar[i-1]}${array[i]}`)
        }

    }

    return ar
}


console.log(    spacey(['kevin', 'has','no','space'])   )