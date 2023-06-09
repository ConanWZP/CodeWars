function isPythagoreanTriple(integers) {
    let array = integers.sort((a, b) => a-b)
    return array[0]**2 + array[1]**2 === array[2]**2

}