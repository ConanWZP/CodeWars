function countSquares(cuts){
    if (cuts === 0) return 1
    return (cuts+1)**3 - (cuts-1)**3
}