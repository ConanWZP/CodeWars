function consonantCount(str) {

    if (str === '') return 0
    let regex = /[bcdfghjklmnpqrstvwxyz]/gi

    let string = str.match(regex)
    console.log(string)

    return string ? string.length : 0
}


console.log(      consonantCount('bcdfghjklmnpqrstvwxyz')        )