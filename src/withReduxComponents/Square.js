import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../components/Square.css'
import { defineLastPlay, play } from './actions'

const Square = ({content, play, lastPlay, setLastPlay, position, saveOnBoard}) => {

    const[current, setCurrent] = useState(null)

    
    const onClick = () => {
        if((!lastPlay || lastPlay === "O") && !current){
            play("X")
            setLastPlay("X")
            setCurrent("X")
            
        }
        else if(lastPlay === "X" && !current){
            play("O")
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
    return { content: state.content, lastPlay: state.lastPlay }
}

export default connect(mapStateToProps, {
    play: play,
    setLastPlay: defineLastPlay
})(Square)