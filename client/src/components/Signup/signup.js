import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from "react-router-dom";

class Signup extends Component {
    state = {
        validUsername: false,
        validPassword: false,
        confirmPassword: false
    }
    
    componentDidUpdate() {
        this.validatePassword();
        this.confirmPassword();
        this.validateUsername();
    }

    validateUsername() {
        if (this.props.username.length > 1 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }
        if (this.props.username.length < 1 && this.state.validUsername) {
            this.setState({
                validUsername: false
            });
        }
    }

    validatePassword() {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    confirmPassword() {
        if (this.props.password === this.props.confirmPassword && !this.state.confirmPassword && this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.props.password !== this.props.confirmPassword && this.state.confirmPassword) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    render() {
        return (
            <>
            <h1>ZooSnatch</h1>
            <div>
                <h2 className="loginTitle title-font">Signup</h2>
              
                {this.props.message?(
                    <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                ): (<></>)}
                <Form>
                    <FormGroup>
                        <Label for="username">Username </Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Label for="password">Password </Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password </Label>
                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" value={this.props.confirmPassword} onChange={this.props.handleInputChange} valid={this.state.confirmPassword} />
                    </FormGroup>
                    <br></br>
                    {/* if all fields are valid, allow the user to submit the form */}
                    {(this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                        <Button onClick={this.props.handleSignup} color="success" >Signup</Button>
                    ) : (
                        <Button onClick={this.props.handleSignup} color="danger" >Signup</Button>
                    )}
                    <p className="signupLink">
                        <Link to="/login">already have an account?  Sign in here</Link>
                    </p>
                </Form>
            </div>
            </>
        );
    }
}

export default Signup;