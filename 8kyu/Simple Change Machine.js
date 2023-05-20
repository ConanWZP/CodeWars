function changeMe(moneyIn){

    if (moneyIn === '£5') {
        let str = ''
        for (let i = 0; i < 25; i++) {
            if (i === 24) {
                str += '20p'
            } else {
                str += '20p '
            }
        }
        return str



    } else if (moneyIn === '£2') {
        let str = ''
        for (let i = 0; i < 10; i++) {

            if (i === 9) {
                str += '20p'
            } else {
                str += '20p '
            }
        }
        return str


    } else if (moneyIn === '£1') {
        let str = ''
        for (let i = 0; i < 5; i++) {
            if (i === 4) {
                str += '20p'
            } else {
                str += '20p '
            }
        }
        return str

    } else if (moneyIn === '50p') {
        return '20p 20p 10p'


    } else if (moneyIn === '20p') {
        return '10p 10p'
    } else {
        return moneyIn
    }



}

console.log(  changeMe() )