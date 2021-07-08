import React, { useState } from 'react'
import Square from './Square'
import '../components/Grid.css'
import { connect } from 'react-redux'
import { updateBoard } from './actions'


const Grid = ({board, updateBoard}) => {


    const setBoard = (play, position) => {
        updateBoard(play, position)
        console.log(board)
    }
    
    //draws the 9x9 grid
    const makeGrid = () => {
        const grid = []

        for (let i = 0; i < 9; i += 3) {
            grid.push(
                <div className="column">
                    <Square position={i} saveOnBoard={setBoard} />
                    <Square position={i+1} saveOnBoard={setBoard} />
                    <Square position={i+2} saveOnBoard={setBoard} />
                </div>)
        }

        return grid
    }

    
    //resets the game board
    const resetTheGame = () => {
        window.location.reload()
    }

    return (
        <div>
            <div>
                {makeGrid()}
            </div>
            <div>
                <h3 className="displayWinner">
                    
                </h3>
                <button className="ui button primary resetButton" onClick={resetTheGame}>Reset</button>
            </div>
        </div>


    )
}

const mapStateToProps = (state) => {
    return {board: state.board}
}

export default connect(mapStateToProps, {
    updateBoard: updateBoard
})( Grid)