import React, { Component } from "react";
import CharImageSquare from "./ImageSquare";
import characters from "../../characters.json";

const CharImageContainer = (props) => {
    return (
        // <h2>{props}</h2>
        <>
            <div className="col-md-3 optionOneclassName">
                {/* how to pass props from grandparent?? */}
                <span onClick={() => props.selectedCharacterUpdatingState (0)}>

                    <CharImageSquare
                        imgsrc={props.giraffeImage}
                        altText={props.giraffeAlt}
                        selectFunction={props.selectFunction}
                    />

                </span>

            </div>


            <div className="col-md-3 optionTwoclassName">

                <span onClick={() => props.selectedCharacterUpdatingState (1)}>

                    <CharImageSquare
                        imgsrc={props.bearImage}
                        altText={props.bearAlt}
                    />
                </span>


            </div>
            <div className="col-md-3 optionThreeclassName">

                <span onClick={() => props.selectedCharacterUpdatingState (2)}>

                    <CharImageSquare
                        imgsrc={props.monkeyImage}
                        altText={props.monkeyAlt}
                    />
                </span>


            </div>
        </>
    )
}

export default CharImageContainer;