function addLength(str) {
    let a = str.split(' ')
    for (let i = 0; i < a.length; i++) {
        a[i] = `${a[i]} ${a[i].length}`
    }

 return a
}


console.log(  addLength('apple ban') )