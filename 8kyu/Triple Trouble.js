function tripleTrouble(one, two, three){
    let str = '';
    for (let i = 0; i < one.length; i++) {
        str+= one[i]
        str+= two[i]
        str+= three[i]
    }
    return str

}


console.log(      tripleTrouble("LLh","euo","xtr")      )