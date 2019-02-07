import React from "react";

const CharImageSquare = (props) => { // passing in the img src from the CharImageContainer
    return (
        <img src= {props.imgsrc} alt={props.altText} height="400" width="200" onclick={props.selectFunction}
        />
    )
}

export default CharImageSquare;