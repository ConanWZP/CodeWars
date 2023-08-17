function generateChatRoomNames(users) {
    let array = []
   // console.log(users)

  let a = users.map((user) => user.split(' ')[0][0].toUpperCase() + user.split(' ')[0].slice(1).toLowerCase() + ' ' + user.split(' ')[1][0].toUpperCase() + user.split(' ')[1].slice(1).toLowerCase())

    let namesArray = users.map((user) => user.split(' ')[0].toLowerCase())
    let lastNameArrayFirstLetter = users.map((user) => user.split(' ')[1][0])

   // console.log(lastNameArrayFirstLetter)

    for (let i = 0; i < namesArray.length; i++) {

      // let name = a[i].split(' ')[0]
        let name = namesArray[i]
        let lastNameFirstLetter = lastNameArrayFirstLetter[i]
        console.log(name)
        //console.log(lastNameFirstLetter)

        //console.log(name)

       let condition1 = findSame(namesArray, name, i)
     //   let condition2 = findSame(lastNameArrayFirstLetter, lastNameFirstLetter, i)

       // if (   namesArray.includes(name, i+1)  ) {
            if (   condition1.length > 0  ) {


               // let filtered = users.filter(user =>    )

                let d = []

                for (let j = 0; j < users.length; j++) {

                   // console.log(condition1[j])
                    if (i === 3) {
                        console.log(    condition1, 'i = 3'    )
                    }
                    let f = findSame(condition1, j, 0)
                    if (i === 3) {
                        console.log(f, 'log f')
                    }


                   // if (condition1.includes(j)) d.push( lastNameArrayFirstLetter[j]   )
                    if (f.length > 0) d.push(   lastNameArrayFirstLetter[j]   )
                }
              //  console.log(name + ' ' + lastNameFirstLetter, 'currentName')
              //  console.log(d, 'DDDDDDDDDDDDDDDDDD')

             //  let lastNameFiltered = lastNameArrayFirstLetter.filter((el, index) => index ===  )

               // let condition2 = findSame(lastNameArrayFirstLetter, lastNameFirstLetter, i)

              //  let condition2 = lastNameFirstLetter === d[0]
               // console.log(condition2)
          //  if (lastNameArrayFirstLetter.includes(lastNameFirstLetter, i+1)) {

                let condition2 = findStart(users, `${ name[0].toUpperCase() + name.slice(1)  + ' ' + lastNameFirstLetter}`, i)

                if (  condition2  ) {

                array.push(a[i])
            } else {
                array.push( name[0].toUpperCase() + name.slice(1)  + ' ' + lastNameFirstLetter.toUpperCase())
            }


        } else {
            array.push(name[0].toUpperCase() + name.slice(1))
        }

    }


   /* for (let i = 0; i < users.length; i++) {
        let name = users[i].split(' ')[0]
        let nameRightForm = name[0].toUpperCase() + name.slice(1).toLowerCase()

        console.log(  nameRightForm  )

       // console.log(nameRightForm, i)

        for (let j = 0; j < 2; j++) {
            let currentName = users[i].split(' ')[0]
            let currentNameRightForm = currentName[0].toUpperCase() + currentName.slice(1).toLowerCase()

            console.log(currentNameRightForm, 'cur')

        }

        //console.log(  users.includes(nameRightForm)    )

        if (users.includes(nameRightForm)) {
            console.log('+')
        }

    }*/



    return array.sort((a, b) => a.localeCompare(b)  -  b.localeCompare(a))
  //  return array
}


const findSame = (array, value, currentIndex) => {

  //  console.log(array)
  //  console.log(value)

    let indexArray = []

    for (let i = 0; i < array.length; i++) {
       let ind = array.indexOf(value, i)
       if (ind !== currentIndex && ind !== -1) indexArray.push(ind)
    }
  //  console.log(indexArray, 'indx')
    
 //  let a = array.lastIndexOf(value, 3-1 )
   // console.log( a )


  //  console.log('------------------ Next step')

    return indexArray
}

const findStart = (array, value, currentIndex) => {

    console.log(value)

    for (let i = 0; i < array.length; i++) {
        if (i !== currentIndex) {
            let ind = array[i].startsWith(value)
            if (ind) return true
        }

    }
    return false
}



console.log(     generateChatRoomNames(  ['James Smith',        'James Jones',        'James Johnson',
    'James Williams',     'James Taylor',       'James Wilson',
    'James Davis',        'James Anderson',     'James Harris',
    'James Miller',       'Mary Smith',         'Mary Jones',
    'Mary Johnson',       'Mary Williams',      'Mary Taylor',
    'Mary Wilson',        'Mary Davis',         'Mary Anderson',
    'Mary Harris',        'Mary Miller',        'Robert Smith',
    'Robert Jones',       'Robert Johnson',     'Robert Williams',
    'Robert Taylor',      'Robert Wilson',      'Robert Davis',
    'Robert Anderson',    'Robert Harris',      'Robert Miller',
    'John Smith',         'John Jones',         'John Johnson',
    'John Williams',      'John Taylor',        'John Wilson',
    'John Davis',         'John Anderson',      'John Harris',
    'John Miller',        'Patricia Smith',     'Patricia Jones'

   ]  )      )