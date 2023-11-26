function pingPong(sounds) {
    const array = sounds.split('-')
    const lastPing = array.lastIndexOf('ping')
    const lastPong = array.lastIndexOf('pong')
    const ac = array.reduce((acc, item, currentIndex, arr) => {
        if (item === 'ping' && arr[currentIndex+1] === 'pong') {
            acc++
        } else if (item === 'pong' && arr[currentIndex+1] === 'ping') {
            acc--
        }
        return acc
    }, 0)
    if (ac >= 1) {
        return 'ping'
    } else if (ac <= -1) {
        return 'pong'
    } else {
        return lastPong > lastPing ? 'ping' : 'pong'
    }

}

console.log(   pingPong('ping-pong-ping-pong-bonk-bing-doof')            )
