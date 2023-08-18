function tailSwap(arr) {
    let array = []


    let a = arr[1].indexOf(':')
    let b = arr[0].indexOf(':')


    array.push( arr[0].slice(0,b) +  arr[1].slice(a) )



    array.push( arr[1].slice(0,a) +  arr[0].slice(b) )


    return array;
}

console.log(     tailSwap(  ['a:12345', '777:xyz'] )    )