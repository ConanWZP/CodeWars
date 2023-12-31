function  calculateAge(a, b) {

    if (b > a) {
        return `You are ${b-a} year${b-a === 1 ? '' : 's'} old.`
    } else if (b === a) {
        return `You were born this very year!`
    } else {
        return `You will be born in ${a-b} year${a-b === 1 ? '' : 's'}.`
    }

}

console.log(   calculateAge(2021, 2020)    )