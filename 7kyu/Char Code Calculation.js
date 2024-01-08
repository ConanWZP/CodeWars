function calc(x){

    const array = x.split('')
    let total1;
    let total2;
    for (let i = 0; i < array.length; i++) {
        total1 += String(array[i].charCodeAt(0))
    }
   total1 = total1.slice(9)
    total2 = total1.replaceAll(7, 1)

    const total1Sum = total1.split('').reduce((acc, item) => acc += Number(item), 0)
    const total2Sum = total2.split('').reduce((acc, item) => acc += Number(item), 0)

    return total1Sum - total2Sum

}

console.log(calc('abcdef'))