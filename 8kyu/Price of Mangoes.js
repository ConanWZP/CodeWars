function mango(quantity, price){
    let free = Math.floor(quantity / 3)
    return (quantity-free)*price
}