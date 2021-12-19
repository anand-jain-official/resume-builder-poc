import "./css/home.css";

import React from 'react';
import { 
  Container,
  Row,
  Col
} from "react-bootstrap";
import SimpleForm from "../components/home/Form";
import Resume from "../components/home/Resume";

function Home(props) {
  return (
    <Container fluid>
      <Row>
        <Col xs = {12} lg = {3} className = "form-bg p-4">
          <h3>Profile</h3>
          <SimpleForm />
        </Col>
        <Col xs = {12} lg = {6} className = "resume-bg p-5">
          <Resume />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;