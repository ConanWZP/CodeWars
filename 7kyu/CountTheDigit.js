function nbDig(n, d) {
    let count = 0
    for (let i = 0; i <= n ; i++) {
        let kSquare = (i*i).toString();
        for (let j = 0; j < kSquare.length; j++) {
            let kSquareSlice = kSquare.slice(j, j+1)
            if (kSquareSlice === d.toString() ) {
                count += 1
            }
        }
    }
    return count
}

console.log(nbDig(10, 1))  // 4
console.log(nbDig(25, 1))  // 11

/*let a = 121;

let b = a.toString()

for (let i = 0; i < b.length; i++) {
    let c = b.slice(i, i+1)
    if (c === )
}

console.log(b)*/
