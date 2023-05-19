function bmi(weight, height) {

    let b = weight/(height**2)

    if (b <= 18.5) {
        return 'Underweight'
    } else if (b <= 25) {
        return 'Normal'
    } else if (b <=30) {
        return 'Overweight'
    } else {
        return 'Obese'
    }

}