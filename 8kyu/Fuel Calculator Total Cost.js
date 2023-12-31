function fuelPrice(litres, pricePerLitre) {

    const priceInCent = pricePerLitre * 100
    const div = Math.floor(litres / 2)
    const discount = 5 * div >= 25 ? 25 : 5*div

    return +((priceInCent*litres - litres*discount)/100).toFixed(2)

}


console.log(  fuelPrice(8, 2.5)  )

