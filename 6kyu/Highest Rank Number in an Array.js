const start = performance.mark('начало')
function highestRank(arr){
    const obj = {

    }
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    const arrayKeys = Object.keys(obj)
    const arrayValues = Object.values(obj)

    const indexOfMaxDuplicate = arrayValues.lastIndexOf(Math.max(...arrayValues))

    return +arrayKeys[indexOfMaxDuplicate]

}



console.log(  highestRank([10,3,2,4,3,5,1,9,4,5,3,1,2,7,10,5,2])  )


const finish = performance.mark('конец')

performance.measure('итого', 'начало', 'конец')
console.log(performance.getEntriesByName('итого')[0].duration)
// количество миллисекунд между метками 'начало' и 'конец'
