function any(arr, fun){

    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i], i)) {
            return true
        }
    }
    return false

}

console.log(    any([1,2,3,4], function(v,i){return v>3}    ))