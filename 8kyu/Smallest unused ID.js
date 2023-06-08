function nextId(ids){
    //this will be awesome!
    let sorted = ids.sort((a, b) => a-b)
    if (   !sorted.includes(0)    ) return 0
    for (let i = 0; i < sorted.length; i++) {

        if (   !sorted.includes(i+1)     ) return i+1
    }


}

console.log(  nextId([0,1,2,3,5])    )