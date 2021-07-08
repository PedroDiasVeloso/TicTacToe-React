import { combineReducers } from "redux";

const playReducer = (content = null, action) => {

    if(action.type === "PLAY"){
        return action.payload
    }

    return null
}

const lastPlayReducer = (lastPlay = null, action) => {

    if(action.type === "LAST_PLAY"){
        return action.payload
    }

    return null
}


const boardUpdateReducer = (board = [], action) => {
    if(action.type === "UPDATE_BOARD"){
        return {
            play: action.payload.move,
            position: action.payload.position
        }
    }

    return null
}

const boardReducer = () => {
    return Array(9).fill(null)
}

export default combineReducers({
    content: playReducer,
    board: boardUpdateReducer,
    lastPlay: lastPlayReducer
})