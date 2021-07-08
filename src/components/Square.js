import React, { useState } from 'react'
import './Square.css'

const Square = ({ lastPlay, recordLastPlay, position, whoWon }) => {

    //records each square content
    const[content, setContent] = useState(null)

    //displays either X or O depending on the conditions
    const onClick = () => {

        if((!lastPlay || lastPlay === "O") && !content && !whoWon){
           setContent("X") 
           recordLastPlay("X", position)
        }
        else if(lastPlay === "X" && !content && !whoWon){
            setContent("O")
            recordLastPlay("O", position)
        }
    }

    return (
        <div onClick={onClick} className="singleSquare">
            <div className="squareContent">
                {content}
            </div>
        </div>
    )
}

export default Square