import React, { Component } from "react";
import "../App.css";
// import { Container, Row, Col, Button } from "reactstrap";
// import API from "../../utils/API";
// import App from "../../App";
import characters from "../characters.json";
import GameLogic from "./GameLogic";
import { HeaderH2, ImageContainer, ImageSquare, ProgressBar, Timer } from "./NewComponents/AllComponents";
// import {ImageOneText, ImageTwoText} from "./ImageText";

const Snatch = (props) => {
    console.log(`snatch props: ${props.choiceOneImg}`);
    return (
        <>
            <title>Decision Time</title>


            <HeaderH2 text="What Would You Like To Do?" />

            <ImageContainer
                sceneLocation={props.sceneLocation}
                currentCharacter={props.currentCharacter}
                choiceOneAlt={props.choiceOneAlt}
                choiceOneImg={props.choiceOneImg}
                choiceOneID={props.choiceOneID}
                choiceTwoAlt={props.choiceTwoAlt}
                choiceTwoImg={props.choiceTwoImg}
                choiceTwoID={props.choiceTwoID}
                checkBanderAnswer={props.checkBanderAnswer.bind(this)}
            />
               {/* <ImageText
                choiceOneText={props.choiceOneText}
                choiceTwoText={props.choiceTwoText}
            /> */}
            
            <ProgressBar />


         




        </>
    );

}

export default Snatch;

