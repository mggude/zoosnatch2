import React, { Component } from "react";
import CharImageSquare from "./ImageSquare";
import characters from "../../characters.json";

const CharImageContainer = (props) => {
        return (
            // <h2>{props}</h2>
            <>
                <div className="col-md-3 optionOneclassName">
                    {/* how to pass props from grandparent?? */}
                    <CharImageSquare 
                        imgsrc = {props.giraffeImage}
                        altText = {props.giraffeAlt}
                    />

                </div>
                <div className="col-md-3 optionTwoclassName">
                    <CharImageSquare 
                        imgsrc = {props.bearImage}
                        altText = {props.bearAlt}
                    />

                </div>
                <div className="col-md-3 optionThreeclassName">
                    <CharImageSquare 
                        imgsrc = {props.monkeyImage}
                        altText = {props.monkeyAlt}
                    />

                </div>
            </>
        )
    }

export default CharImageContainer;