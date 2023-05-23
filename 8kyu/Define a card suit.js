function defineSuit(card) {
    let c = card.split('')
    if (c.includes('♠')) {
        return 'spades'
    } else if (c.includes('♦')) {
        return 'diamonds'
    } else if (c.includes('♥')) {
        return 'hearts'
    } else {
        return 'clubs'
    }
}