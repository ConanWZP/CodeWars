function twoArePositive(a, b, c) {
    let array = [a, b, c]
    let answer = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            answer.push('t')
        }
    }
    return answer.length === 2

}