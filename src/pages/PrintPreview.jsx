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
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Container fluid>
      <Row>
        <Col xs = {12} className = "resume-bg p-5">
          <div className="width-100 text-center pb-3">
            <Button variant="danger" className="mx-2" onClick = {() => navigate("/home")}>
              <i className = "fa fa-pencil-square-o me-2" aria-hidden="true" />
              Continue Editing
            </Button>
            <Button variant="success" className="mx-2" onClick = {handlePrint}>
              <i className = "fa fa-print me-2" aria-hidden="true" />
              Print
            </Button>
          </div>
          <div className="d-flex justify-content-center height-80vh">
            <Resume ref = {componentRef} theme = {selectedTheme} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PrintPreview;