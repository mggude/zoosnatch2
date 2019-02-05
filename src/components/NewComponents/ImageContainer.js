import React, { Component } from "react";
import ImageSquare from "./ImageSquare";
import characterObject from "../../characters.json";

class ImageContainer extends Component {

    state = {
        currentCharacter: this.props.currentCharacter,
        currentLocation: this.props.sceneLocation,
        imageOne: characterObject[this.props.currentCharacter].scene[this.props.sceneLocation].choiceOneImg,
        choiceOneAlt: "choiceOneImg",
        imageTwo: characterObject[this.props.currentCharacter].scene[this.props.sceneLocation].choiceTwoImg,
        choiceTwoAlt: "choiceTwoImg",
    }

    render() {
        return (
            <>
                <div className="col-md-6 optionOneclassName">
                    <ImageSquare
                        imgsrc={this.state.imageOne}
                        altText={this.state.choiceOneAlt}
                    />
                </div>
                <div className="col-md-6 optionTwoclassName">
                    <ImageSquare
                        imgsrc={this.state.imageTwo}
                        altText={this.state.choiceTwoAlt}
                    />
                </div>
            </>
        )
    }
};

export default ImageContainer;