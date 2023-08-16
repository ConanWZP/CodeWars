var filterString = function(value) {

    return +value.match(/\d/g).join('')
}

console.log(  filterString('a1b2c3')  )