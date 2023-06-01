function remove (string) {
   let a = string.replaceAll('!', '').split('')
    a.push('!')
    return a.join('');
}

console.log(   remove('Hi!!!')     )