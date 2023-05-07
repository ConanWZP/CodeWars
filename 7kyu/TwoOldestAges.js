// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){

    return ages.sort((a, b) => {
        return b - a
    }).slice(0, 2).reverse()

}

console.log(twoOldestAges([24, 2, 10, 17]))  //   [17, 24]
console.log(twoOldestAges([84, 2]))  // [2, 84]
