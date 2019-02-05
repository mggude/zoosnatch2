import React, { Component } from "react";
import characterObject from "../../characters.json";


class ImageText extends Component {

    state = {
        currentCharacter: this.props.currentCharacter,
        currentLocation: this.props.sceneLocation,
        imageTextOne: characterObject[this.props.currentCharacter].scene[this.props.sceneLocation].choiceOne,
        imageTextTwo: characterObject[this.props.currentCharacter].scene[this.props.sceneLocation].choiceTwo
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

