import React, { Component } from "react";
import Snatch from "./Bandersnatch";
import CharacterSelect from "./CharacterSelect";
import Message from "./Message";
import Canvas from "./Canvas";
import characters from "../characters.json";
import CharacterImagesimport, {
    Giraffe01,
    Giraffe02,
    Giraffe11,
    Giraffe12,
    Giraffe21,
    Giraffe22,
    Giraffe31,
    Giraffe32,

    Bear01,
    Bear02,
    Bear11,
    Bear12,
    Bear21,
    Bear22,
    Bear31,
    Bear32
} from "../images/snatch_images/CharacterImages";

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

// startGame = () => {
//     // render CharacterSelect Component, hide all others
// }



//function answerQuestion()
// pass this through to check the answer inside of a page component
// update state
// look at react-19/29-friendRefactor/components/FriendCard/index:23 to call/ src/apps.js: 13 & 27 


class GameLogic extends Component {

    // need to componentWillMount to set state from database
    state = {
        unlockedCharacters: 0,
        currentCharacter: 0,
        sceneLocation: 0,
        points: 0,
        showCaracterSelect: false,
        showMessage: false,
        showSnatch: true,
        showCanvas: false,
        choiceOneImg: null,
        choiceTwoImg: null,
    }


    // ======================== Display Current Page Component ============================== //
    render() {
        if (this.state.showCaracterSelect) {
            return (
                <CharacterSelect />
            )
        } else if (this.state.showMessage) {
            return (
                <Message />
            )
        } else if (this.state.showSnatch) {
            return (
                <Snatch
                    sceneLocation={this.state.sceneLocation}
                    currentCharacter={this.state.currentCharacter}
                    // choiceOneImg = {characters[this.state.currentCharacter].scene[this.state.sceneLocation].choiceOneImg}
                    choiceOneImg={this.state.choiceOneImg}
                    choiceOneAlt="ChoiceOne"
                    choiceTwoImg={this.state.choiceTwoImg}
                    choiceTwoAlt="ChoiceTwo"
                />
            );
        } else if (this.state.showCanvas) {
            return (
                <Canvas />
            );
        }
    }
    // ======================== Display Current Page Component ============================== //

    // ========================Pass Photos to Bandersnatch Page ============================== //
    updateImage = () => {
        switch (this.state.currentCharacter) {
            case 0:
                switch (this.state.sceneLocation) {
                    case 0:
                        this.setState({ choiceOneImg: Giraffe01 });
                        this.setState({ choiceTwoImg: Giraffe02 });
                        break;
                    case 1:
                        this.setState({ choiceOneImg: Giraffe11 });
                        this.setState({ choiceTwoImg: Giraffe12 });
                        break;
                    case 2:
                        this.setState({ choiceOneImg: Giraffe21 });
                        this.setState({ choiceTwoImg: Giraffe22 });
                        break;
                    case 3:
                        this.setState({ choiceOneImg: Giraffe31 });
                        this.setState({ choiceTwoImg: Giraffe32 });
                        break;
                }
                break;
            case 1:
                switch (this.state.sceneLocation) {
                    case 0:
                        this.setState({ choiceOneImg: Bear01 });
                        this.setState({ choiceTwoImg: Bear02 });
                        break;
                    case 1:
                        this.setState({ choiceOneImg: Bear11 });
                        this.setState({ choiceTwoImg: Bear12 });
                        break;
                    case 2:
                        this.setState({ choiceOneImg: Bear21 });
                        this.setState({ choiceTwoImg: Bear22 });
                        break;
                    case 3:
                        this.setState({ choiceOneImg: Bear31 });
                        this.setState({ choiceTwoImg: Bear32 });
                        break;
                }
                break;
        }
        return '{imageOne}';
    }
    // ========================Pass Photos to Bandersnatch Page ============================== //


    componentDidMount() {
        // this.startGame();
        this.currentPageComponent();

        this.updateImage()
        console.log("SwitchCase with result of: Char:" + this.state.currentCharacter + " | Scene: " + this.state.sceneLocation + " | ImageOneValue: " + this.state.choiceOneImg + " | ImageTwoValue: " + this.state.choiceTwoImg);
    }




}

export default GameLogic;