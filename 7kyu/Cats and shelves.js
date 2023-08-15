function solution(start, finish) {

    let a = finish - start
    let b = a / 3
    let c = Math.floor(b)
    let d = c + (finish - (c*3 +start))



    if (a % 3 === 0) {
        return b
    } else {
        return d
    }

}

console.log(    solution(1, 9)   )