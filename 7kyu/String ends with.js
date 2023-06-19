function solution(str, ending){

    console.log(  str,  ending )
    if (ending.length > str.length) return false
    return str.lastIndexOf(ending) + ending.length === str.length

}


console.log(  solution('abc', 'abcd')  )