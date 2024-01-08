function isSolved(board) {


    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === board[i][1] &&
            board[i][0] === board[i][2] &&
            board[i][0] !== 0) {
            return board[i][0]
        }
    }

    for (let i = 0; i < board.length; i++) {
        if (board[0][i] === board[1][i] &&
            board[0][i] === board[2][i] &&
            board[0][i] !== 0) {
            return board[0][i]
        }
    }


    if ((board[0][0] === board[1][1] &&
        board[0][0] === board[2][2] &&
        board[0][0] !== 0) || (
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0] &&
        board[0][2] !== 0
    )) {
        return board[1][1]
    }
    // если до этого не сработало, значит игра не завершена или ничья

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 0) {
                return -1
            }
        }
    }
    return 0

}


console.log(isSolved([[1, 1, 1],
    [0, 1, 2],
    [2, 1, 0]]))