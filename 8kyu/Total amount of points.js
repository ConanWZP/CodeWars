function points(games) {
    let score = 0;

    for (let i = 0; i < games.length; i++) {

        let x = games[i].slice(0,1)
        let y = games[i].slice(2,3)

        if (x > y) {
            score += 3
        } else if (x === y) {
            score+=1
        }
    }

    return score

}


console.log( points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])  )