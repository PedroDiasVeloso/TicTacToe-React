import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../components/Square.css'
import { defineLastPlay } from './actions'

const Square = ({lastPlay, setLastPlay, position, saveOnBoard, whoWon }) => {

    const [current, setCurrent] = useState(null)


    const onClick = () => {
        if ((!lastPlay || lastPlay === "O") && !current && !whoWon) {
            saveOnBoard("X", position)
            setLastPlay("X")
            setCurrent("X")
        }
        else if (lastPlay === "X" && !current && !whoWon) {
            saveOnBoard("O", position)
            setLastPlay("O")
            setCurrent("O")
        }
    }


    return (
        <div onClick={onClick} className="singleSquare">
            <div className="squareContent">
                {current}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { lastPlay: state.lastPlay }
}

export default connect(mapStateToProps, {
    setLastPlay: defineLastPlay
})(Square)