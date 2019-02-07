import React, { Component } from "react";
// import Snatch from "./Bandersnatch";
import CharacterSelect from "../../components/CharacterSelect";
// import Message from "./Message";
import Canvas from "../../components/Canvas";
// import characters from "../../character.json";
// import SceneImagesimport, { //Image names represent currentCharacter, Scene number and ImageChoiceNumber
//     Giraffe01, Giraffe02, Giraffe11, Giraffe12, Giraffe21, Giraffe22, Giraffe31, Giraffe32,
//     Bear01, Bear02, Bear11, Bear12, Bear21, Bear22, Bear31, Bear32
// } from "../images/snatch_images/SceneImages";
import CharacterImages, { StaticGiraffe, StaticBear, StaticMonkey, CagedGiraffe, CagedBear, CagedMonkey } from "../../images/characters/CharacterImages"


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
        sceneLocation: 0,
        points: 0,

        showCaracterSelect: true,
        showMessage: false,
        showSnatch: false,
        showCanvas: false,

        giraffeSelectImg: CagedGiraffe,
        bearSelectImg: StaticBear,
        monkeySelectImg: CagedMonkey,

        choiceOneImg: null,
        choiceOneAlt: null,
        choiceTwoImg: null,
        choiceTwoAlt: null,
        correctAnswer: null,

        messageText: null,
        buttonText: null,
    }


    // ======================== Display Current Page Component ============================== //
  

    // ================= Pass Unlocked Character Imgs to CharacterSelect Page =============== //
    SelectCharacter = () => {
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
    // ======================== Update State From SelectCharacter Page ======================= //
    selectedCharacterUpdatingState = (num) => {
        console.log(num);
        window.location.href = "/canvas";
        // var selectedCharacterImage = null;
        // this.setState({ currentCharacter: num});
        // this.setState({showMessage: true}, {showCaracterSelect : false});
        // this.render();

    }
    // =============================== Update Message Page =================================== //
    showQuestion = () => {

    }

    // ========================Pass Photos to Bandersnatch Page ============================== //
    // updateImage = () => {
    //     switch (this.state.currentCharacter) {
    //         case 0:
    //             switch (this.state.sceneLocation) {
    //                 case 0:
    //                     this.setState({ choiceOneImg: Giraffe01 });
    //                     this.setState({ choiceTwoImg: Giraffe02 });
    //                     break;
    //                 case 1:
    //                     this.setState({ choiceOneImg: Giraffe11 });
    //                     this.setState({ choiceTwoImg: Giraffe12 });
    //                     break;
    //                 case 2:
    //                     this.setState({ choiceOneImg: Giraffe21 });
    //                     this.setState({ choiceTwoImg: Giraffe22 });
    //                     break;
    //                 case 3:
    //                     this.setState({ choiceOneImg: Giraffe31 });
    //                     this.setState({ choiceTwoImg: Giraffe32 });
    //                     break;
    //             }
    //             break;
    //         case 1:
    //             switch (this.state.sceneLocation) {
    //                 case 0:
    //                     this.setState({ choiceOneImg: Bear01 });
    //                     this.setState({ choiceTwoImg: Bear02 });
    //                     break;
    //                 case 1:
    //                     this.setState({ choiceOneImg: Bear11 });
    //                     this.setState({ choiceTwoImg: Bear12 });
    //                     break;
    //                 case 2:
    //                     this.setState({ choiceOneImg: Bear21 });
    //                     this.setState({ choiceTwoImg: Bear22 });
    //                     break;
    //                 case 3:
    //                     this.setState({ choiceOneImg: Bear31 });
    //                     this.setState({ choiceTwoImg: Bear32 });
    //                     break;
    //             }
    //             break;
    //     }
    //     return '{imageOne}';
    //     return '{imageTwo}';
    // }
    // ========================Function To Pass To Bandersnatch Component ============================== //

    // ========================Function To Check Answer From Bandersnatch ============================== //
    // listenBanderAnswer = () => {
    //     const userInput = null;
    //     console.log("started listenBanderAnswer")
    
    //     // set function to an onClick event to set userInput to the  
    //     document.getElementById("optionOneImg").addEventListener("click",function() {
    //         userInput = "choiceOne";
    //         // userChoiceText = characterArray[currentCharacterValue].scene[currentScene].choiceOne;
    //         console.log("clicked on image one");
    //         this.checkAnswer (userInput);
    //     })
    //     document.getElementById("optionTwoImg").addEventListener("click",function() {
    //         userInput = "choiceTwo";
    //         // userChoiceText = characterArray[currentCharacterValue].scene[currentScene].choiceTwo;
    //         console.log("clicked on image two");
    //         this.checkAnswer (userInput);
    //     })
    // }   
    // checkBanderAnswer = (userInput) => {
    //     const shortToScene = characters[this.state.currentCharacter].scene[this.state.sceneLocation];
    //     // const userInput = 
    //     console.log("started checkBanderAnswer")
    //     userInput = this.id;
        
    //         if (userInput === shortToScene.correctAnswer) {
    //             console.log("Correct answer!");
    //             console.log("You chose: " + userInput);
    //             // update points function
    //             if (this.state.sceneLocation >= 3) {
    //                 // set showSnatch to false
    //                 // set showMessage to true
    //                     // pass in new props to render answerTrue
    //                     // pass in new props to render button button text to "Go to Leaderboards"
    //                     // pass in new props to render button to upload state to database, send to leaderboard HTML page
                    
    //             } else if (this.state.sceneLocation < 3) {
    //                 // set showSnatch to false
    //                 // set showMessage to true
    //                     // pass in new props to render answerTrue
    //                     // pass in new props to render button button text to "Continue"
    //                     // pass in new props to render button to set State showMessage to false, showCanvas to true   
    //             }
        
    //         } else if (userInput !== shortToScene.correctAnswer) {
    //             console.log("WRONG answer!");
    //             console.log("You chose: " + userInput);
    //                 // set showSnatch to false
    //                 // set showMessage to true
    //                     // pass in new props to render answerFalse
    //                     // pass in new props to render button button text to "Go to Leaderboards"
    //                     // pass in new props to render button to upload state to database, send to leaderboard HTML page
    //         }
    //     }
        
        
    // // ========================Function To Update State From Canvas ============================== //
    // canvasComplete = (canvasPoints) => {
    //     // line 220 from canvas, function checksceneLocationComplete
    //         console.log("passed canvasComplete function works!");
    //         this.setState({ points: this.state.points + canvasPoints});
    //         this.setState({ sceneLocation: this.state.sceneLocation++ });
    //         console.log("canvasPoints: " + canvasPoints + " statePoints: " + this.state.points);
    // }
    // // ========================Functionality of GameLogic Component ============================== //
    // componentDidMount() {
    //     this.updateImage();
    //     this.setState({messageText: characters[this.state.currentCharacter].scene[this.state.sceneLocation].question})
    // }

    // componentDidUpdate() {
    //     this.setState ({giraffeSelectImg : {StaticGiraffe} }, {bearSelectImg : {CagedBear} }, {monkeySelectImg : {CagedMonkey} });

    // }

    render() {
        // if (this.state.showCaracterSelect) {
            return (
                <CharacterSelect 
                    unlockedCharacters = {this.state.unlockedCharacters}
                    giraffeSelectImg = {this.state.giraffeSelectImg}
                    bearSelectImg = {this.state.bearSelectImg}
                    monkeySelectImg = {this.state.monkeySelectImg}
                    selectedCharacterUpdatingState  = {this.selectedCharacterUpdatingState.bind(this)}
                />
            )
        // } else if (this.state.showMessage) {
        //     return (
        //         <Message 
        //             messageText={this.state.messageText}
        //             buttonText= "Continue"
        //         />
        //     )
        // } else if (this.state.showSnatch) {
        //     return (
        //         <Snatch
        //             sceneLocation={this.state.sceneLocation}
        //             currentCharacter={this.state.currentCharacter}

        //             choiceOneImg= {this.state.choiceOneImg}
        //             choiceOneAlt="choiceOne"
        //             choiceOneText= {characters[this.state.currentCharacter].scene[this.state.sceneLocation].choiceOne}
        //             choiceOneID = "optionOneImg"

        //             choiceTwoImg= {this.state.choiceTwoImg}
        //             choiceTwoAlt= "choiceTwo"
        //             choiceTwoText= {characters[this.state.currentCharacter].scene[this.state.sceneLocation].choiceTwo}
        //             choiceTwoID = "optionTwoImg"

        //             checkBanderAnswer= {this.checkBanderAnswer.bind(this)}
        //         />
        //     );
        // } else if (this.state.showCanvas) {
        //     return (
        //         <Canvas 
        //             canvasComplete = {this.canvasComplete.bind(this)}
        //             currentCharacter={this.state.currentCharacter}
        //             sceneLocation={this.state.sceneLocation}
        //             points={this.state.points}
        //         />
        //     );
        // }
    }
}



export default GameLogic;