import React from "react";
import characterObject from "../../characters.json";

export const ImageOneText = (props) => {
    return (
        <h2>{characterObject[props.currentCharacter].scene[props.currentScene].choiceOne}</h2>
    )
}

export const ImageTwoText = (props) => {
    return (
        <h2>{characterObject[props.currentCharacter].scene[props.currentScene].choiceTwo}</h2>
    )
}
