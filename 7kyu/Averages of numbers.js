function averages(numbers) {

    const output = []
    if (numbers && numbers.length > 1) {

        for (let i = 0; i < numbers.length - 1; i++) {
            output.push(Math.round(numbers[i] + numbers[i + 1]) / 2)
        }
        return output
    } else {
        return  []
    }


}


console.log(    averages([1, 3, 5, 1, -10])      )