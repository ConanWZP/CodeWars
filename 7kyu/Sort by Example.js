function exampleSort(arr,exampleArr){
    return arr.sort((a,b) => exampleArr.indexOf(a) - exampleArr.indexOf(b))
}


console.log(   [1,2,3,4,5],[2,3,4,1,5]     )