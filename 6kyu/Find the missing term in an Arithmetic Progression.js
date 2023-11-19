function findMissing(arr) {
    let d
    if (arr[1]-arr[0] < 0 && arr[arr.length-1]-arr[arr.length-2] < 0) {
        d = Math.max(arr[1]-arr[0], arr[arr.length-1]-arr[arr.length-2])
    } else {
        d = Math.min(arr[1]-arr[0], arr[arr.length-1]-arr[arr.length-2])
    }

    let array = []
    let answer;
    for (let i = 0; i < arr.length+1; i++) {
        if (i === 0) {
            array.push(arr[i])
        } else if (i === arr.length) {
            array.push(arr[i-1])
        } else {
            if (!arr.includes(array[i-1]+d)) {
                answer = array[i-1]+d
                return answer
            }
            array.push(array[i-1]+d)
        }
    }
}


console.log(  findMissing([ 2, 3, 4, 6, 7 ])        )