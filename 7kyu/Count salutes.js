function countSalutes(hallway) {
    let count = 0
    for (let i = 0; i < hallway.length; i++) {
        if (hallway[i] === '>') {
            for (let j = i; j < hallway.length; j++) {
                if (hallway[j] === '<') count = count + 2
            }
        }

    }
    return count
}

console.log(   countSalutes('<---->---<---<-->')   )