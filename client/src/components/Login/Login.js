import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from "react-router-dom";
import "../Login/login.css"

function Login(props) {
    return (
        <>
        <h1>ZooSnatch</h1>
        <div className="loginBox">

            <h2>Login</h2>
            
            {props.message ? (
                <Alert className="animated fadeIn" color="danger">{props.message}</Alert>
            ) : (<></>)}
            <Form>
                <FormGroup>
                    <Label for="username">Username </Label>
                    <Input type="text" name="username" id="username" placeholder="username" value={props.username} onChange={props.handleInputChange} />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="password">Password </Label>
                    <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
                <br></br>
                <Button id="loginBtn" onClick={props.handleLogin} block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">dont have an account?  Sign up here</Link>
                </p>
            </Form>
        </div>
        </>
    );
}

export default Login;