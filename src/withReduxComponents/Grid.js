import React, { useState } from 'react'
import Square from './Square'
import '../components/Grid.css'
import { connect } from 'react-redux'
import { numberOfPlays, updateBoard } from './actions'


const Grid = ({board, updateBoard, numberOfPlays, setNumberOfPlays}) => {

    const[reRender, setReRender] = useState(false)


    const setBoard = (play, position) => {
        updateBoard(play, position)
        setNumberOfPlays()
        setReRender(!reRender)
    }
   

    //draws the 9x9 grid
    const makeGrid = () => {
        const grid = []

        for (let i = 0; i < 9; i += 3) {
            grid.push(
                <div className="column">
                    <Square whoWon={whoWon(board)} position={i} saveOnBoard={setBoard} />
                    <Square whoWon={whoWon(board)} position={i+1} saveOnBoard={setBoard} />
                    <Square whoWon={whoWon(board)} position={i+2} saveOnBoard={setBoard} />
                </div>)
        }

        return grid
    }

    //detects who won the game
    const whoWon = (board) => {
        const winningPossibilities = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
        ]

        for (let i = 0; i < winningPossibilities.length; i++) {

            if (board[winningPossibilities[i][0]]) {

                if (board[winningPossibilities[i][0]] === board[winningPossibilities[i][1]]) {

                    if (board[winningPossibilities[i][0]] === board[winningPossibilities[i][2]]) {

                        return board[winningPossibilities[i][0]]
                    }
                }
            }
        }
        return null
    }

     //displays the winner
     const winnerDisplay = (winner) => {
        if (winner) {
            return <div>{`The winner is ${winner} !`}</div>
        }
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
                {winnerDisplay(whoWon(board))}
                </h3>
                <h3 className="displayWinner">
                    {numberOfPlays === 9 && !winnerDisplay(whoWon(board)) ? "Its a Draw!!!" : null}
                </h3>
                <button className="ui button primary resetButton" onClick={resetTheGame}>Reset</button>
            </div>
        </div>


    )
}

const mapStateToProps = (state) => {
    return {
        board: state.board,
        numberOfPlays: state.numberOfPlays
    }
}

export default connect(mapStateToProps, {
    updateBoard: updateBoard,
    setNumberOfPlays: numberOfPlays
})(Grid)