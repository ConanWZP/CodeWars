function grow(x){
    return x.reduce( (accumulator, currentValue) => accumulator * currentValue,  1 )
}


console.log(  grow([1, 2, 3]) )