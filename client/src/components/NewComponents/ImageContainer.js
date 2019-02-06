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
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="optionOneclassName" style={styles}>
                            <ImageSquare
                                imgsrc={props.choiceOneImg}
                                altText={props.choiceOneAlt}
                            />
                            <p>test</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="optionTwoclassName" style={styles1}>
                            <ImageSquare
                                imgsrc={props.choiceTwoImg}
                                altText={props.choiceTwoAlt}
                            />
                            <p>test</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default ImageContainer;