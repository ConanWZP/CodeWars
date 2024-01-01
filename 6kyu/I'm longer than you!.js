

function longer(s) {

    const arr = s.split(' ')

    return arr.sort((a, b) => {
        if (a.length === b.length) {
            for (let i = 0; i < a.length; i++) {
                if (a[i].toUpperCase() === a[i] && b[i].toUpperCase() !== b[i]) {
                    return -1
                } else if (a[i].toUpperCase() !== a[i] && b[i].toUpperCase() === b[i]) {
                    return 1
                } else if (a[i] === b[i]) {

                } else {
                    return a.localeCompare(b)
                }
            }

        } else if (a.length > b.length) {
            return 1
        } else {
            return -1
        }
    }).join(' ')

}


console.log( longer("This will be our Year")   )

console.log(  'r'.localeCompare('R')  )
console.log(     'A'.localeCompare('z', 'en',{ sensitivity: 'variant'})     )