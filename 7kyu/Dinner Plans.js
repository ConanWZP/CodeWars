function commonGround(s1, s2){
   // console.log(s1)
  //  console.log(s2)
    let result = []
    const arr1 = s1.split(' ')
    const arr2 = s2.split(' ')
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            result.push(arr2[i])
        }
    }

    return result.length > 0 ? result.join(' ') : 'death'


}

//console.log(commonGround("eat a burger and drink a coke", "drink a coke"))
console.log(   commonGround("G1HwyFo tCMnxI tKzryM GJoyK", "G1HwyFo p1K CJwG GJoyK")    )

// G1HwyFo GJoyK