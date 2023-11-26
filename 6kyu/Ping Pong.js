function pingPong(sounds) {
    // Your code here!
   // const array = sounds.split('-')
    const array = [
        'pong', 'ping',
        'bink', 'pong',
        'ping', 'donk',
        'pong', 'ping',
        'pong', 'bang'
    ]
    console.log(array)
    const lastPing = array.lastIndexOf('ping')
    const lastPong = array.lastIndexOf('pong')
    console.log(lastPing)
    console.log(lastPong)
    const ac = array.reduce((acc, item, currentIndex, arr) => {
        if (item === 'ping' && arr[currentIndex+1] === 'pong') {
            acc++
        } else if (item === 'pong' && arr[currentIndex+1] === 'ping') {
            acc--
        }
        return acc
    }, 0)
    console.log(ac)

  /* if (ac === 1 || ac === 0) {
       if (lastPong > lastPing) {
           return 'ping'
       } else {
           return 'pong'
       }
   } else {
       if (lastPong > lastPing) {
           return 'ping'
       } else {
           return 'pong'
       }
   }*/
    /*if (lastPong > lastPing) {
        if (ac >= -1) {
            return 'ping'
        } else {
            return 'pong'
        }
    } else {
        if (ac <= 1) {
            return 'pong'
        } else {
            return 'ping'
        }
    }*/
    if (ac >= 1) {
        return 'ping'
    } else if (ac <= -1) {
        return 'pong'
    } else {
        return lastPong > lastPing ? 'ping' : 'pong'
    }

}

console.log(   pingPong('ping-pong-ping-pong-bonk-bing-doof')            )
//console.log(      pingPong('pong-ping-bink-pong-ping-donk-pong-ping-pong-bang')     )


/*
const array = ['a', "a", "a", 'b']
let result = array.reduce((acc, el) => {
    if (el === 'a') {
        acc++
    }
    return acc
}, 0)

console.log(    result, 'asdasdasd'     )*/
