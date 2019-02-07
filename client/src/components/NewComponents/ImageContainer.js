import React from "react";
import ImageSquare from "./ImageSquare";
import { Container, Row, Col, Button } from "reactstrap";
import characterObject from "../../characters.json";

const ImageContainer = (props) => {
    const styles = {
        float: "left",
        justifyContent: "center"
    }
    const styles1 = {
        float: "right",
        justifyContent: "center"
    }

    console.log("image Container");
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="optionOneclassName" style={styles}>
                            <ImageSquare
                                imgsrc={props.choiceOneImg}
                                altText={props.choiceOneAlt}
                                id={props.choiceOneID}
                                checkBanderAnswer={props.checkBanderAnswer.bind(this)}

                            />
                            <p>{props.choiceOneText}</p>
                            <span onClick= { () => (props.checkBanderAnswer(props.choiceOneID))} />
                        </div>
                    </Col>
                    <Col>
                        <div className="optionTwoclassName" style={styles1}>
                            <ImageSquare
                                imgsrc={props.choiceTwoImg}
                                altText={props.choiceTwoAlt}
                                id={props.choiceTwoID}
                            />
                            <p>{props.choiceTwoText}</p>
                            <span onClick= { () => (props.checkBanderAnswer(props.choiceTwoID))} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default ImageContainer;