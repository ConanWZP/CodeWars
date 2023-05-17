function scramble(str1, str2) {

    let array1 = str1.split('')
    let array2 = str2.split('')



/*
*
*  БЕРЕРЕШЬ ПЕРВЫЙ ЭЛЕМЕНТ, ИЩЕЩ ДЛИНУ (ЧЕРЕЗ ИНДЕКС) КОГДА ОН ПОВТОРИТСЯ ВНОВЬ,  ПОТОМ ЕСЛИ СЛЕДУЮЩЕЕ ПОВТОРЕНИЕ ПРОИСХОДИТ ЧЕРЕЗ СТОЛЬКО ЖЕ, ТО УДАЛЯЕШЬ ЛИШНЕЕ
*
* дОЛЖНО БЫТЬ СРАВНЕНИЕ ДЛИН ЭРРАЯ 1 И ЭРРАЯ 2, А ТАКЖЕ ИХ ОБРЯЕЗНАННЫХ ВЕРСИЙ, ЕСЛИ ПРИ ПОЛНЫХ ВЕРСИЯХ ЭРРАЙ 2 > ЭРРАЯ 1, ТО СРАЗУ FALSE
* ЕСЛИ
*
*
*
*
* */


    if (array1.length >= array2.length) {

        // По идее это делаем, если только длина ограмная пипец

        if (array1.length > 100) {
            let a1 = array1.indexOf(array1[0], 1)
            let a2 = array1.indexOf(array1[0], a1+1)
           // console.log(a2, 'a2')
            if (a2 - a1 === a1 ) {
                array1.splice(a1, array1.length - a1)
                console.log(array1)
            }
        }

        if (array2.length > 100) {
            let b1 = array2.indexOf(array2[0], 1)
            let b2 = array2.indexOf(array2[0], b1+1)
         //   console.log(b2, 'b2')
            if (b2 - b1 === b1 ) {
                array2.splice(b1, array2.length - b1)
                console.log(array2)
            }
        }



        for (let i = 0; i < array2.length; i++) {
            if (array1.includes(array2[i])) {

                let a = array1.indexOf(array2[i])

                array1.splice(a, 1)


            } else {
                return false
            }
        }
        return true



    } else {
        return false
    }

}


//console.log( scramble("abcdefghijklmnopqrstuvwxyz".repeat(10_000), "zyxcba".repeat(9_000) )  )


function scrambleMod(str1, str2) {
    let positions = {}
    return str2.split('').every(el => {
        let position = str1.indexOf(el, positions[el] || 0)

        positions[el] = position + 1
        console.log(position)
        return position > -1
    })

}

console.log(  scrambleMod('aabbcamaomsccdd', 'commas')  )