function stringsConstruction(A, B) {
    //coding and coding..
    // считаем количество букв в строке B, которые есть в строке A:
    // A: 'asde';   B: 'aaeedddssss';  выйдет две "a" две 'e' три 'd' и четыре 's' и берем минимальное, т.е. две это и есть ответ
    // indexOf может помочь, количество индексов - равно количество букв
    // если в строке A несколько одинковых букв, то количество этих букв в строке B делим на количество в A и округляем вниз

    // Цикл в цикле считаеем A[i]e

    for (let i = 0; i < A.length; i++) {
      if ( !B.includes(A[i])) return 0
    }
    let c = 100

    for (let i = 0; i < A.length; i++) {
        let localC = 0


        let regX = new RegExp(A[i], 'g')
        let divider = A.match(regX).length
       // console.log(  divider   , `Для буквы ${A[i]}`       )

        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                localC++
            }
        }
        // Тут нужно еще по делить на количество повторов


        if (localC < c) c = Math.floor(localC/divider)

    }


    return c

}


console.log(  stringsConstruction("hnccv","hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn")   )



//console.log(      'zzzzzzzzzzzzzzz'.match(re).length       ) // 15