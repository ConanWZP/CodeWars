// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
}


console.log(   sortme(["I","Point","See","An","About","small","That","ask","place","will","a","Last","man","person","World"])   )