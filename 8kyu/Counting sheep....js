function countSheeps(arrayOfSheep) {

    let sum = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sum += 1
        }
    }
    return sum

}