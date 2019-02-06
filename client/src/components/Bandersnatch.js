import React, { Component } from "react";
import "../App.css";
// import { Col, Row, Container } from "../../components/grid/index";
// import API from "../../utils/API";
// import App from "../../App";
import characters from "../characters.json";
import { HeaderH2, ImageContainer, ImageSquare, ImageText, ProgressBar, Timer } from "./NewComponents/AllComponents";

const Snatch = (props) => {
    console.log(props);
    return (
        <>
            <title>Decision Time</title>
            <div className="w3-container">
                <div className="container">
                    <HeaderH2 text="What Would You Like To Do?" />

                    <div className="row">
                        <ImageContainer
                            sceneLocation={props.sceneLocation}
                            currentCharacter={props.currentCharacter}
                            choiceOneAlt={props.choiceOneAlt}
                            choiceOneImg={props.choiceOneImg}
                            choiceTwoAlt={props.choiceTwoAlt}
                            choiceTwoImg={props.choiceTwoImg}
                        />
                        {/* <ProgressBar /> */}
                        {/* <ImageText 
                                sceneLocation = {props.sceneLocation}
                                currentCharacter = {props.currentCharacter}
                            /> */}
                    </div>

                </div>
            </div>
        </>
    );

}

export default Snatch;
