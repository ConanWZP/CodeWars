// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {

    // интересны только последние два действия - не только
    let a
    let count = 1

    if (buttons.length > 2) {

        for (let i = buttons.length-1; buttons[i] === buttons[i-1] ; i = i - 1) {
                count++
        }

        return count % 2 === 0 ? 'Nothing'  : buttons[buttons.length-1]

    } else if (buttons.length === 2) {

        if (buttons[0] === buttons[1]) {
            return 'Nothing'
        } else {
            return buttons[1]
        }

    } else if (buttons.length === 1) {

        return buttons[0]
    } else  {


        return 'Nothing'
    }

}


console.log( likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike']) )