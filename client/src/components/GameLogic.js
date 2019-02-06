import React, { Component } from "react";
import Snatch from "./Bandersnatch";
import CharacterSelect from "./CharacterSelect";
import Message from "./Message";
import Canvas from "./Canvas";
import characters from "../characters.json";
import SceneImagesimport, { //Image names represent currentCharacter, Scene number and ImageChoiceNumber
    Giraffe01, Giraffe02, Giraffe11, Giraffe12, Giraffe21, Giraffe22, Giraffe31, Giraffe32,
    Bear01, Bear02, Bear11, Bear12, Bear21, Bear22, Bear31, Bear32
} from "../images/snatch_images/SceneImages";
import CharacterImages, { StaticGiraffe, StaticBear, StaticMonkey, CagedGiraffe, CagedBear, CagedMonkey } from "../images/characters/CharacterImages"


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


//function answerQuestion()
// pass this through to check the answer inside of a page component
// update state
// look at react-19/29-friendRefactor/components/FriendCard/index:23 to call/ src/apps.js: 13 & 27 


class GameLogic extends Component {

    // need to componentWillMount to set state from database
    state = {
        unlockedCharacters: 0,
        currentCharacter: 0,
        sceneLocation: 2,
        points: 0,
        showCaracterSelect: false,
        showMessage: false,
        showSnatch: false,
        showCanvas: true,
        giraffeSelectImg: null,
        bearSelectImg: null,
        monkeySelectImg: null,
        choiceOneImg: null,
        choiceTwoImg: null,
        banderAnswer: null,
    }


    // ======================== Display Current Page Component ============================== //
  

    // ================= Pass Unlocked Character Imgs to CharacterSelect Page =============== //
    SelectCharacter = (props) => {
        switch (this.state.unlockedCharacters) {
          case 0:
            this.setState ({giraffeSelectImg : {StaticGiraffe} });
            this.setState ({bearSelectImg : {CagedBear} });
            this.setState ({monkeySelectImg : {CagedMonkey} });
            break;
          case 1:
            this.setState ({giraffeSelectImg : {StaticGiraffe} });
            this.setState ({bearSelectImg : {StaticBear} });
            this.setState ({monkeySelectImg : {CagedMonkey} });
          break;
          case 2:
            this.setState ({giraffeSelectImg : {StaticGiraffe} });
            this.setState ({bearSelectImg : {StaticBear} });
            this.setState ({monkeySelectImg : {StaticMonkey} });
          break;
          default:
            return 0;
        }
    };
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
        return '{imageTwo}';
    }
    // ========================Function To Pass To Bandersnatch Component ============================== //
    
    // ========================Function To Check Answer From Bandersnatch ============================== //
    checkBanderAnswer = () => {
        var userInput;
        var correctAnswerText;
        var wrongAnswerText;
        var shortToScene = characters[this.state.currentCharacter].scene[this.state.sceneLocation]
    
        if (userInput === shortToScene.correctAnswer) {
            console.log("Correct answer!");
            console.log("You chose: " + userInput);
            correctAnswerText = shortToScene.answerTrue
            // update points function
            if (this.state.sceneLocation >= 3) {
                // set showSnatch to false
                // set showMessage to true
                    // pass in new props to render answerTrue
                    // pass in new props to render button button text to "Go to Leaderboards"
                    // pass in new props to render button to upload state to database, send to leaderboard HTML page
                
            } else if (window.localStorage.getItem("currentSceneId") < 3) {
                // set showSnatch to false
                // set showMessage to true
                    // pass in new props to render answerTrue
                    // pass in new props to render button button text to "Continue"
                    // pass in new props to render button to set State showMessage to false, showCanvas to true   
            }
    
        } else if (userInput !== shortToScene.correctAnswer) {
            console.log("WRONG answer!");
            console.log("You chose: " + userInput);
            wrongAnswerText = shortToScene.answerFalse
                // set showSnatch to false
                // set showMessage to true
                    // pass in new props to render answerFalse
                    // pass in new props to render button button text to "Go to Leaderboards"
                    // pass in new props to render button to upload state to database, send to leaderboard HTML page
        }
    }   
    // ========================Function To Update State From Canvas ============================== //
    canvasComplete = (canvasPoints) => {
        // line 220 from canvas, function checksceneLocationComplete
            console.log("passed canvasComplete function works!");
            this.setState({ points: this.state.points + canvasPoints});
            this.setState({ sceneLocation: this.state.sceneLocation++ });
    }

    // ========================Functionality of GameLogic Component ============================== //
    componentDidMount() {
        // this.startGame();
        this.updateImage();
        console.log("SwitchCase with result of: Char:" + this.state.currentCharacter + " | Scene: " + this.state.sceneLocation + " | ImageOneValue: " + this.state.choiceOneImg + " | ImageTwoValue: " + this.state.choiceTwoImg);
    }

    render() {
        if (this.state.showCaracterSelect) {
            return (
                <CharacterSelect 
                    unlockedCharacters = {this.state.unlockedCharacters}
                />
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
                <Canvas 
                    canvasComplete = {this.canvasComplete.bind(this)}
                    currentCharacter={this.state.currentCharacter}
                    sceneLocation={this.state.sceneLocation}
                    points={this.state.points}
                />
            );
        }
    }
}



export default GameLogic;