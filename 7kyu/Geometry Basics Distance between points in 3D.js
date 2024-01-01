function distanceBetweenPoints(a,b){
    return +(Math.sqrt( (b.x - a.x)**2 + (b.y - a.y)**2 + (b.z - a.z)**2 ).toFixed(6))
}


console.log(     distanceBetweenPoints({ x: 1, y: 3, z: 5 }, { x: 2, y: 15, z: 10 })        )