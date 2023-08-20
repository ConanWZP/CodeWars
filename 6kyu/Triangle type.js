/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){

    let alpha = Math.acos( (a*a + b*b - c*c)/(2*a*b) ) * 180 / Math.PI
    let beta = Math.acos( (a*a + c*c - b*b)/(2*a*c) ) * 180 / Math.PI
    let gamma = Math.acos( (b*b + c*c - a*a)/(2*b*c) ) * 180 / Math.PI

    if (alpha < 90 && beta < 90 && gamma < 90) {
        return 1
    } else if ( (alpha > 90 && alpha < 180) || (beta > 90 && beta < 180)  || (gamma > 90 && gamma < 180) ) {
        return 3
    } else if (alpha === 90 || beta === 90 || gamma === 90) {
        return 2
    } else {
        return 0
    }

}


console.log(  triangleType(7, 3, 2)  )