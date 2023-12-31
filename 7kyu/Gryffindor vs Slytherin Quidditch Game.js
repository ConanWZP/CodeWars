function gameWinners(gryffindor, slytherin) {

    const gryffPoints = gryffindor[0] + (gryffindor[1] === 'yes' ? 150 : 0)
    const slythPoings = slytherin[0] + (slytherin[1] === 'yes' ? 150 : 0)

    if (gryffPoints === slythPoings) return "It's a draw!"
    if (gryffPoints > slythPoings) return 'Gryffindor wins!'
    if (gryffPoints < slythPoings) return "Slytherin wins!"

}

console.log( gameWinners([100, 'yes'],[100, 'no'])  )