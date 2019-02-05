import React, { Component } from "react";
import ImageSquare from "./ImageSquare";
import characterObject from "../../characters.json";

class Message  extends Component {
    
    state = {
        currentCharacter : this.props.currentCharacter,
        currentLocation : this.props.sceneLocation
    }
    
    render () {
        return (
            // <h2>{props}</h2>
            <>
            <h1>Message</h1>
                {/* <div className="col-md-6 optionOneclassName">
                    <ImageSquare 
                        imgsrc = {this.state.imageOne}
                        altText = {this.state.choiceOneAlt}
                    />

                </div>
                <div className="col-md-6 optionTwoclassName">
                    <ImageSquare 
                        imgsrc = {this.state.imageTwo}
                        altText = {this.state.choiceTwoAlt}
                    />

                </div> */}
            </>
        )
    }
}

export default Message;