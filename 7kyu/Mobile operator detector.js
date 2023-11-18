function detectOperator(a){
    let obj = {
        '039': 'Golden Telecom',
        '050': 'MTS',
        '063': 'Life:)',
        '066': 'MTS',
        '067': 'Kyivstar',
        '068': 'Beeline',
        '093': 'Life:)',
        '095': 'MTS',
        '096': 'Kyivstar',
        '097': 'Kyivstar',
        '098': 'Kyivstar',
        '099': 'MTS',
    }

    return obj[a.toString().slice(1, 4)] ? obj[a.toString().slice(1, 4)] : 'no info'

}

console.log(detectOperator(8011155117711))