function pillars(numPill, dist, width) {
    let length = 0
    dist = dist*100
    if (numPill === 1) return 0
    for (let i = 1; i < numPill; i++) {
        if (i === numPill - 1) {
            length += dist
        } else {
            length += dist + width
        }


    }
    return length

}

console.log(   pillars(11, 15, 30)  )