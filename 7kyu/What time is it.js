var getMilitaryTime = function(input) {


    if (input.includes('AM')) {
        if (+input.slice(0, 2) >= 12) {
            return `0${ (+input.slice(0, 2) - 12)}${input.slice(2, 8)}`
        } else {
            return  input.slice(0, 8)
        }

    } else {

        if (+input.slice(0, 2) < 12) {
            return `${ (+input.slice(0, 2) + 12)}${input.slice(2, 8)}`
        } else {
            return  input.slice(0, 8)
        }
    }

}

// 01:02:03AM

console.log(    getMilitaryTime('12:24:25PM')    )