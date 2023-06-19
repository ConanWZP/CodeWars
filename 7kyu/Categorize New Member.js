function openOrSenior(data){

    let output = []

    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            output.push('Senior')
        } else {
            output.push('Open')
        }
    }

    return output

}

console.log(   openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])        )