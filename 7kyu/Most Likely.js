function mostLikely(prob1,prob2){


    let prob1DoubleDotIndex = prob1.indexOf(':')
    let firstPartOfProb1 = prob1.slice(0, prob1DoubleDotIndex)
    let lastPartOfProb1 = prob1.slice(prob1DoubleDotIndex+1, prob1.length)

    let prob2DoubleDotIndex = prob2.indexOf(':')
    let firstPartOfProb2 = prob2.slice(0, prob2DoubleDotIndex)
    let lastPartOfProb2 = prob2.slice(prob2DoubleDotIndex+1, prob2.length)

    return (firstPartOfProb1 / lastPartOfProb1) > (firstPartOfProb2 / lastPartOfProb2)

}


console.log( mostLikely( ('1:1'), ('1:2') )  )