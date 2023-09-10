function circleArea(radius) {
    if (radius > 0) {
        return Math.round(  (radius**2) * Math.PI *1000 ) / 1000
    }
    throw new Error

}

console.log( circleArea(68) )