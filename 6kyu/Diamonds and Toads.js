function diamondsAndToads(sentence, fairy) {
    const dictionary = {}
    const arrayLetters = sentence.split('')

    if (fairy === 'good') {
        dictionary['ruby'] = 0
        dictionary['crystal'] = 0

        arrayLetters.forEach((e) => {
            if (e === 'r') {
                dictionary['ruby'] +=1
            } else if (e === 'R') {
                dictionary['ruby'] += 2
            } else if (e === 'c') {
                dictionary['crystal'] += 1
            } else if (e === 'C') {
                dictionary['crystal'] += 2
            }
        })

    } else {
        dictionary['python'] = 0
        dictionary['squirrel'] = 0
        arrayLetters.forEach((e) => {
            if (e === 'p') {
                dictionary['python'] += 1
            } else if (e === 'P') {
                dictionary['python'] += 2
            } else if (e === 's') {
                dictionary['squirrel'] += 1
            } else if (e === 'S') {
                dictionary['squirrel'] += 2
            }
        })
    }

    return dictionary

}


console.log(diamondsAndToads('and fun more string stuf string squirell more in Python Python for it ruby pyhin more it just', "good"))