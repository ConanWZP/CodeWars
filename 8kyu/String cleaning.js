function stringClean(s){
    let regex = /\d/g
    return s.replace(regex, '')
    // Function will return the cleaned string
}

console.log(    stringClean("(E3at m2e2!!)")     )