import React, { Component } from "react";
import "../bandersnatch/bandersnatch.css";
import { Col, Row, Container } from "../../components/grid/index";
import API from "../../utils/API";
import App from "../../App";
import characters from "../characters.json";
import { HeaderH2, ImageContainer, ImageSquare, ImageText, ProgressBar, Timer } from "./NewComponents/AllComponents";


class Snatch extends Component {

    state ={
        unlockedCharacters : this.props.unlockedCharacters,
        currentCharacter : this.props.currentCharacter,
        sceneLocation : this.props.sceneLocation,
        points : this.props.points,
    }
    componentDidMount() {

    }

    render() {
        return (
            <>
                <title>Decision Time</title>
                <div className="w3-container">
                    <div className="container">
                        <HeaderH2 text="What Would You Like To Do?" />

                        <div className="row">
                            <ImageContainer
                                sceneLocation = {this.state.sceneLocation}
                                currentCharacter = {this.state.currentCharacter}
                            />
                            <ProgressBar />
                            <ImageText 
                                sceneLocation = {this.state.sceneLocation}
                                currentCharacter = {this.state.currentCharacter}
                            />
                        </div>
                    
                    </div>
                </div>
            </>
        );
    }

}