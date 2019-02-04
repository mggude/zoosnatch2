import React, { Component } from "react";
import "../bandersnatch/bandersnatch.css";
import { Col, Row, Container } from "../../components/grid/index";
import API from "../../utils/API";
import App from "../../App";
import characters from "../../characters.json";

class Snatch extends Component {
    constructor(state) {
        super();
        this.unlockedCharacters = state.unlockedCharacters;
        this.currentCharacter = state.currentCharacter;
        this.sceneLocation = state.sceneLocation;
        this.points = state.points;
    }
    componentDidMount() {

    }

    render() {
        return (
            <>
                <title>Decision Time</title>
                <div className="w3-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="displayQuestionText">
                                    <h2>What do you want to do?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 optionOneclassName">
                                <div id="optionOneImg">
                                </div>
                                <div className="timerDiv">
                                    <div id="timerCountdownBarLeft">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 optionTwoclassName">
                                <div id="optionTwoImg"></div>
                                <div className="timerDiv">
                                    <div id="timerCountdownBarRight">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 optionOneclassName">
                                <div id="optionOneText" className="options"></div>
                            </div>
                            <div className="col-md-6 optionTwoclassName">
                                <div id="optionTwoText" className="options"></div>
                            </div>
                            <div className="row"> -->
                        <div className="col-md-6">
                                    <div className="timerDiv">
                                        <div id="timerCountdownBarLeft">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div id="timerCountdownBarRight">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}