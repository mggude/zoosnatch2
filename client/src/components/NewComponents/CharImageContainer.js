import React, { Component } from "react";
import CharImageSquare from "./ImageSquare";
import characters from "../../characters.json";

class CharImageContainer extends Component {
    
    state = {
        unlockedCharacters: this.props.unlockedCharacters,
        points: this.props.points,
        giraffeImage : this.props.giraffeImage,
        giraffeAlt : "giraffeImage",
        bearImage : this.props.bearImage,
        bearAlt : "bearImage",
        monkeyImage : this.props.monkeyImage,
        monkeyAlt : "monkeyImage",
    }
    
    render () {
        return (
            // <h2>{props}</h2>
            <>
                <div className="col-md-6 optionOneclassName">
                    {/* how to pass props from grandparent?? */}
                    <CharImageSquare 
                        imgsrc = {this.state.giraffeImage}
                        altText = {this.state.giraffeAlt}
                    />

                </div>
                <div className="col-md-6 optionTwoclassName">
                    <CharImageSquare 
                        imgsrc = {this.state.bearImage}
                        altText = {this.state.bearAlt}
                    />

                </div>
                <div className="col-md-6 optionThreeclassName">
                    <CharImageSquare 
                        imgsrc = {this.state.monkeyImage}
                        altText = {this.state.monkeyAlt}
                    />

                </div>
            </>
        )
    }
}

export default CharImageContainer;