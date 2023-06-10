function sortArray(a1, a2) {
    let result = []

    for (let i = 0; i < a2.length; i++) {
        let word = a2.filter((e) => e[0] === a1[i][0])
        result.push(...word)
    }
    return result
}


var arr1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var arr2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

console.log(    sortArray(arr1, arr2)      )