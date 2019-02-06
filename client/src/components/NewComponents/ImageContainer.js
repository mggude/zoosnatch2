import React, { Component } from "react";
import ImageSquare from "./ImageSquare";
import characterObject from "../../characters.json";

const ImageContainer = (props) => {
        return (
            <>
                <div className="col-md-6 optionOneclassName">
                    <ImageSquare
                        imgsrc={props.choiceOneImg}
                        altText={props.choiceOneAlt}
                    />
                </div>
                <div className="col-md-6 optionTwoclassName">
                    <ImageSquare
                        imgsrc={props.choiceTwoImg}
                        altText={props.choiceTwoAlt}
                    />
                </div>
            </>
        )
};

export default ImageContainer;