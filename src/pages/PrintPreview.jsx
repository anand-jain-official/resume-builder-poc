import "./css/home.css";

import React, { useState } from 'react';
import { 
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import Resume from "../components/home/Resume";
import { useSelector } from "react-redux";

function PrintPreview(props) {
  const selectedTheme = useSelector(store => store.home.theme);
  return (
    <Container fluid>
      <Row>
        <Col xs = {12} className = "resume-bg p-5 d-flex justify-content-center">
          <Resume theme = {selectedTheme} />
        </Col>
      </Row>
    </Container>
  )
}

export default PrintPreview;