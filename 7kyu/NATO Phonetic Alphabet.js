var nato = (function() {
    var letters =  {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
    }

    return function(word) {

        let arrayByLetters = word.split('').map((letter) => letter.toUpperCase())
        let str = ''

        for (let i = 0; i < arrayByLetters.length; i++) {
            if (i === arrayByLetters.length -1) {
                str += letters[arrayByLetters[i]]
            } else {
                str += letters[arrayByLetters[i]] + ' '
            }

        }
        return str
    }
})()

console.log( nato('abc') )