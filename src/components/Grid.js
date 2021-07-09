import React, { useState } from 'react'
import Square from './Square'
import './Grid.css'


const Grid = () => {

    //records last move played
    const [lastPlay, setLastPlay] = useState(null)
    //records the board
    const [board, setBoard] = useState(Array(9).fill(null))
    //counts the plays
    const [numberOfPLays, setNumberOfPlays] = useState(0)

    //sets each play on the board
    const recordLastPlay = (play, position) => {
        const tempBoard = board

        tempBoard[position] = play

        setBoard(tempBoard)

        setLastPlay(play)
        
        setNumberOfPlays(numberOfPLays+1)
    }

    //draws the 9x9 grid
    const makeGrid = () => {
        const grid = []

        for (let i = 0; i < 9; i += 3) {
            grid.push(
                <div className="column">
                    <Square whoWon={whoWon(board)} position={i} lastPlay={lastPlay} recordLastPlay={recordLastPlay} />
                    <Square whoWon={whoWon(board)} position={i + 1} lastPlay={lastPlay} recordLastPlay={recordLastPlay} />
                    <Square whoWon={whoWon(board)} position={i + 2} lastPlay={lastPlay} recordLastPlay={recordLastPlay} />
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
                    {numberOfPLays === 9 && !winnerDisplay(whoWon(board)) ? "Its a Draw!!!" : null}
                </h3>
                <button className="ui button primary resetButton" onClick={resetTheGame}>Reset</button>
                
            </div>
        </div>


    )
}

export default Grid