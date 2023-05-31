function whoIsPaying(name){
    if (name.length <= 2) {
        return [name]
    } else {
        return [name, name.slice(0,2)]
    }
}

console.log(  whoIsPaying("Me")   )