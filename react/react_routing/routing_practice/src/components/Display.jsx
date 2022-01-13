import React from "react";
import { useParams } from 'react-router-dom';

const Display = () => {
    const { input, textColor, bgColor } = useParams();
    console.log(textColor);
    console.log(bgColor);

    const styling = {
        color: textColor ? textColor : 'black',
        backgroundColor: bgColor ? bgColor : 'white'
    }

    return(
        <h2 style={ styling }>{isNaN(input) ? `The word is: ${input}` : `The number is: ${input}`}</h2>
    )
}
export default Display;