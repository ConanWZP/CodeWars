function toIndustrial(time){

    if (typeof time === 'number') {
        return Math.round(time / 60 *100) / 100
    } else {
        let index = time.indexOf(':')
        let hours = +time.slice(0, index)

        let minutes = Math.round(+time.slice(index+1)/60 *100) / 100
        return hours + minutes
    }

}

function toNormal(time){


    time = `${time}`


    let index = time.indexOf('.')
    let minutes
    if (time.slice(index+1).length === 1) {
        minutes = Math.round(  time.slice(index+1) * 600/100  )
    } else {
        minutes = Math.round(  time.slice(index+1) * 60/100  )
        console.log(minutes)
    }


    if (minutes < 10) {
        minutes = '0' + minutes
    }

    return `${time.slice(0, index)}:${minutes}`
}


console.log(  toIndustrial('1:45')   )


console.log(  toNormal(1.33) )