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



export default combineReducers({
    board: boardUpdateReducer,
    lastPlay: lastPlayReducer
})