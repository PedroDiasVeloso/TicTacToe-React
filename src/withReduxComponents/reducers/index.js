import { combineReducers } from "redux";




const lastPlayReducer = (lastPlay = null, action) => {

    if(action.type === "LAST_PLAY"){
        return action.payload
    }

    return lastPlay
}


const boardUpdateReducer = (board = Array(9).fill(null), action) => {

    
    if(action.type === "UPDATE_BOARD"){
        board[action.payload.position] = action.payload.move
        return board
    }

    return board
}

const numberOfPlaysReducer = (numberOfPlays = 0, action) => {

    if(action.type === "NUMBER_OF_PLAYS"){
        numberOfPlays += action.payload
        return numberOfPlays
    }

    return numberOfPlays
}



export default combineReducers({
    board: boardUpdateReducer,
    lastPlay: lastPlayReducer,
    numberOfPlays: numberOfPlaysReducer
})