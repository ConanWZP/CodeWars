function removeAll(integer_list, values_list){

    let array = integer_list

    for (let i = 0; i < values_list.length; i++) {
        array = array.filter((el) => el !== values_list[i])
    }
    return array
}

console.log(   removeAll([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2])    )
