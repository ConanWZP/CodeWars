function highAndLow(numbers){
    const arr = numbers.split(' ').map(e => +e)
    return arr.length > 1 ? `${Math.max(...arr)} ${Math.min(...arr)}` : `${arr[0]} ${arr[0]}`
}


console.log(   highAndLow("42")       )