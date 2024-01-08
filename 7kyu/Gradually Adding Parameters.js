function add() {

    return [...arguments].reduce((acc, item, currentIndex) => {
        acc += item * (currentIndex + 1)
        return acc
    }, 0)

}


console.log(add(100, 200, 300))