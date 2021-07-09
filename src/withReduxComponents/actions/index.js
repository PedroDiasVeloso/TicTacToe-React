export const defineLastPlay = (move) => {
    return {
        type: "LAST_PLAY",
        payload: move
    }
}

export const numberOfPlays = () => {
    return{
        type: "NUMBER_OF_PLAYS",
        payload: 1
    }
}

export const updateBoard = (move, position) => {
    return {
        type: "UPDATE_BOARD",
        payload: {
            move: move,
            position: position
        }
    }
}

