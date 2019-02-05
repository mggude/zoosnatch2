import React, { Component } from "react";
import Snatch from "./Bandersnatch";
import CharacterSelect from "./CharacterSelect";
import Message from "./Message";
import Canvas from "./Canvas";
import characters from "../characters.json";

// set state from Auth Database
// start game - component did mount
    // character Select component
    // Message component
    // Bandersnatch component
    // Canvas Component
    // ? Leaderboad Component?
// ? ComponentUnmount

// ===============DB State to GameLogic State ============================== //
// ===============DB State to GameLogic State ============================== //

startGame = () => {
    // render CharacterSelect Component, hide all others
}

currentPageComponent = () => {
    // render current page
    // look at react-20/04-Conditional-Render/PortfolioContainer.js
}

//function answerQuestion()
    // pass this through to check the answer inside of a page component
    // update state
    // look at react-19/29-friendRefactor/components/FriendCard/index:23 to call/ src/apps.js: 13 & 27 


class Snatch extends Component {
    
    state ={
        unlockedCharacters : this.props.unlockedCharacters,
        currentCharacter : this.props.currentCharacter,
        sceneLocation : this.props.sceneLocation,
        points : this.props.points,
        showCaracterSelect: this.props.showCaracterSelect,
        showMessage: this.props.showMessage,
        showSnatch: this.props.showSnatch,
        showCanvas: this.props.showCanvas,
    }

    componentDidMount() {
        this.startGame();
    }

    render() {
        return (
            <Snatch 
                sceneLocation = {this.state.sceneLocation}
                currentCharacter = {props.currentCharacter}
                choiceOneAlt = {props.choiceOneAlt}
                imageOne = {props.imageOne}
                choiceTwoAlt = {props.choiceTwoAlt}
                imageTwo = {props.imageTwo}
            />
        )
    }
}
