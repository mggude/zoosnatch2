import React from "react";

const ImageSquare = (props) => { // passing in the img src
    return (
        <img src={props.imgsrc} alt={props.altText} height="600" width="600" />
    )
};

export default ImageSquare;