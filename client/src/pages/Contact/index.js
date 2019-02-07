import React from "react";
// import "./contact.css";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <h1 className="text-center">ZooSnatch</h1>
        </Col>
        <Col size="md-12">
          <h5 className="initials text-center">ZooSnatch is a passion project inspired by Netflix's BanderSnatch. We love helping you choose your own adventure!</h5>
          <h5 className="initials text-center">More paths and characters coming soon. Use the form below to reach out to us with questions or comments!</h5>
        </Col>
        <Col size="md-6">
          <form method="post" id="email_form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" name="subject" class="form-control" id="name" placeholder="Jane Doe" />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="text" name="reply_to" class="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div class="form-group">
              <label for="text_area">Message</label>
              <textarea name="text" placeholder="I love ZooSnatch!" class="form-control" id="textarea"></textarea>
            </div>
            <button type="submit" class="btn btn-danger" id="submit_form" value="Submit">Submit</button>
          </form>
        </Col>
        <Col size="md-6">
          <label for="creators">CREATORS</label>
          <a href="https://github.com/asippel129" target="_blank">
            <p class="creator form-control text-center btn btn-danger">Anna Sippel – back end – www.annasippel.com</p>
          </a>
          <a href="https://github.com/Ccolon105" target="_blank">
            <p class="creator form-control text-center btn btn-danger">Caleb Colon – back end – www.calebcolon.com</p>
          </a>
          <a href="https://github.com/jaksik" target="_blank">
            <p class="creator form-control text-center btn btn-danger">Connor Jaksik – front end – www.connorjaksik.com</p>
          </a>
          <a href="https://github.com/mggude" target="_blank">
            <p class="creator form-control text-center btn btn-danger">Grace Gude – front end – www.gracegude.com</p>
          </a>
          <a href="https://github.com/kDurg" target="_blank">
            <p class="creator form-control text-center btn btn-danger">Kyle Durigan – front end – www.kyledurigan.com</p>
          </a>
        </Col>
      </Row>
      <footer class="fixed-bottom text-center">
        <div class="container">
          <a href="/">Home</a>
        </div>
      </footer>
    </Container>
  );
}

export default Contact;