function howMuchILoveYou(nbPetals) {
    let array = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]

    if ( nbPetals < 7 ){

        return array[nbPetals-1]


    } else {
        let c = nbPetals % 6
        if (c===0) {
            return array[5]

        } else {
            return array[c-1]
        }
    }

}