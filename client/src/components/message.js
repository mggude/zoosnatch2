import React from "react";
import characterObject from "../characters.json";
import { Container, Row, Col, Button } from "reactstrap";

export const Message = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <p>{props.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Button onClick={props.handleButtonClick} color="success" block>{props.buttonText}</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
};


// export default Message;