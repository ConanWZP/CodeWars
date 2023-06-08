function dropCap(n) {
    let str = n.split(' ')
    let a = str.map((e) => e.length > 2 ? `${e[0].toUpperCase()}${e.slice(1).toLowerCase()}` : e)
    return a.join(' ')

}


console.log(   dropCap('  leading spaces')      )