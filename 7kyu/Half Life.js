function halfLife(quantityInitial, quantityRemaining, time) {

    return -time/Math.log2(quantityRemaining/quantityInitial)

}

console.log(       halfLife(74, 21, 2)          )

console.log(        )