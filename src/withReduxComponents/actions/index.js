export const play = (move) => {
    return {
        type: "PLAY",
        payload: move
    }
}

export const defineLastPlay = (move) => {
    return {
        type: "LAST_PLAY",
        payload: move
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

