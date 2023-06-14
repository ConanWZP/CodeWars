function createArray(number){
    var newArray = [];

    for(var counter = 1; counter <= number;){
        newArray.push(counter);
        counter +=1
    }

    return newArray;
}