import "./css/home.css";

import React, { useRef } from 'react';
import { 
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import Resume from "../components/home/Resume";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';

function PrintPreview(props) {
  const selectedTheme = useSelector(store => store.home.theme);
  const navigate = useNavigate();
  const componentRef = useRef(); // Ref is a reference variable created to refer to a DOM element after it's assigned.
  const handlePrint = useReactToPrint({
    content: () => componentRef.current, // The current of the ref (assigned to the dom element in the child component) is given to the print package to print
  });
  return (
    <Container fluid>
      <Row>
        <Col xs = {12} className = "resume-bg p-5">
          <div className = "width-100 text-center pb-3">
            <Button variant = "danger" className = "m-2" onClick = {() => navigate("/home")}>
              <i className = "fa fa-pencil-square-o mr-2" aria-hidden = "true" />
              Continue Editing
            </Button>
            <Button variant = "success" className = "m-2" onClick = {handlePrint}>
              <i className = "fa fa-print mr-2" aria-hidden = "true" />
              Print
            </Button>
          </div>
          <div className = "d-flex justify-content-center height-80vh">
            <Resume ref = {componentRef} theme = {selectedTheme} /> {/* We are passing the ref to the child component to assign to an element inside the child */}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PrintPreview;