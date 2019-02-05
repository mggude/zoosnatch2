import React, { Component } from "react";
import characterObject from "../../characters.json";


class ImageText extends Component {

    state = {
        currentCharacter: this.props.currentCharacter,
        currentLocation: this.props.sceneLocation,
        imageTextOne: characterObject[this.state.currentCharacter].scene[this.state.sceneLocation].choiceOne,
        imageTextTwo: characterObject[this.state.currentCharacter].scene[this.state.sceneLocation].choiceTwo
    }

    render() {
        return (
            <>
                <div className="col-md-6 optionOneclassName">
                    <h2>{this.state.imageTextOne}</h2>
                </div>
                <div className="col-md-6 optionTwoclassName">
                    <h2>{this.state.imageTextTwo}</h2>
                </div>
            </>
        )
    }
};

export default ImageText;

