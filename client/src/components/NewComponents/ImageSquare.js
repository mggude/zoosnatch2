import React from "react";
// import { Container, Row, Col } from "reactstrap";

const ImageSquare = (props) => { // passing in the img src
    console.log(`imagesqaure props: ${props.choiceOneImg}`);
    return (
        <>
        
        <img src={props.imgsrc} alt={props.altText} height="500" width="500" />


        {/* <img src={require(props.imgsrc)} alt={props.altText} height="600" width="600" /> */}
        </>
    )
};

export default ImageSquare;