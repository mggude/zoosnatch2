import React from "react";

const ImageSquare = (props) => { // passing in the img src
    return (
        <img src={props.imgsrc} alt={props.altText} id={props.id} height="600" width="600" />        
        // <img src={require(props.imgsrc)} alt={props.altText} height="600" width="600" />
    )
};

export default ImageSquare;