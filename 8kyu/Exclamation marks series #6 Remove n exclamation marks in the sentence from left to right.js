function remove(s,n){
    let a = s
    for (let i = 0; i < n; i++) {
      a =  a.replace('!', '')
    }
    return a

}

console.log(    remove('hi!', 2)    )