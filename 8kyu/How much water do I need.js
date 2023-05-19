function howMuchWater(water, load, clothes){


    if (clothes / load > 2) {
        return 'Too much clothes'
    } else if (clothes < load) {
        return 'Not enough clothes'
    } else {
        let b = water * (1.1 ** (clothes-load))

        return  Number(b.toFixed(2))
    }


}


console.log(  howMuchWater(50,15,29) )