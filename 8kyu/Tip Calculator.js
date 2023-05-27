function calculateTip(amount, rating) {
    let a = rating.toLowerCase()
    let tip = {
        'terrible': 0,
        'poor': 0.05,
        'good': 0.1,
        'great': 0.15,
        'excellent': 0.2,
    }


    return tip[a] >= 0 ? Math.ceil(amount*tip[a]) : 'Rating not recognised'
}


console.log( calculateTip(20, "good")  )