var AmIAfraid = function(day, num){

    if (day === 'Monday' && num === 12) {
        return true
    } else if (day === 'Tuesday' && num > 95) {
        return true
    } else if (day === 'Wednesday' && num === 34) {
        return true
    }else if (day === 'Thursday' && num === 0) {
        return true
    }else if (day === 'Friday' && num % 2 === 0) {
        return true
    }else if (day === 'Saturday' && num === 56) {
        return true
    }else if (day === 'Sunday' && (num === 666 || num === -666)) {
        return true
    } else {
        return false
    }


}