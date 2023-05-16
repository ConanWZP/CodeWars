
/*let abc = [0,9]*/
let abc = [0, 4, 6, 8, 8, 8, 5, 5, 7]

const func = (matrix) => {

    if (matrix.length === 1) return matrix[0]


   /* const insFunc = (matrix) => {*/
        let array = []
        let count = 1

        for (let i = 0; i < matrix.length; i++) {


            if ( matrix[i] === matrix[i+1]) {
                count += 1
               /* if (count > 1) {

                    array[array.length-1] = count
                    count++

                } else {
                    count++
                    array.push(1)

                }*/

            } else {
/*
                count = 1
                array.push(1)*/


                array.push(count)
                count = 1

            }

        }

       /* return array
    }*/


   /* while (extra.length > 1) {

        console.log(extra, 'extra')
        extra = insFunc(extra)
    }*/

    return func(array)

}





console.log(func(abc))