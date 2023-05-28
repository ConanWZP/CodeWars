function findHack(arr) {
    let list = {
        'A': 30,
        'B': 20,
        'C': 10,
        'D': 5
    }
    let hackers = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] > 200) {
            hackers.push(arr[i][0])
        } else {
            /*for (const letter in list) {
                console.log(list[letter])
            }*/
            let sum = 0
            let counter = 0
            for (let j = 0; j < arr[i][2].length; j++) {

                /*if (arr[i][2][j] === ('A' || 'B' || 'C' || 'D')) {
                    console.log(arr[i][2][j], 'Буква', j )
                }*/
                if (arr[i][2][j] === 'A' || arr[i][2][j] === 'B') {
                    counter++
                }
                sum += (list[arr[i][2][j]] || 0)


            }
            if (counter >= 5) {
                sum += 20
            }
            console.log(sum, arr[i][0])
            console.log(counter)
            if (sum < arr[i][1]) {
                hackers.push(arr[i][0])
            }
        }
    }

    return hackers
}


/*
console.log(   findHack([
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 110, ["B", "A", "A", "A"]],
    ["name3", 200, ["B", "A", "A", "C"]],
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
])   )*/

console.log(   findHack(

    [
        ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
        ["name2", 120, ["B", "A", "A", "A"]],
        ["name3", 160, ["B", "A", "A", "A","A"]],
        ["name4", 140, ["B", "A", "A", "C", "A"]]
    ]

)   )
