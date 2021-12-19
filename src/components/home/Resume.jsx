import React from 'react';
import { 
  Container,
  Row,
  Col
} from "react-bootstrap";

const Resume = props => {
  return (
    <Row className="height-100">
      <Col xs = {4} className = "bg-danger pt-3 pb-3">
        <h4 className="mb-0">Anand Jain</h4>
        <p>Full Stack Developer</p>
        <div className="stripe-left p-1 mb-3">
          <h6 className="text-uppercase mb-0 ps-2">Profile</h6>
        </div>
        <h6 className="text-uppercase mb-0">Email</h6>
        <p>Lorem Ipsum</p>
        <h6 className="text-uppercase mb-0">Address</h6>
        <p>Lorem Ipsum</p>
        <h6 className="text-uppercase mb-0">Phone</h6>
        <p>Lorem Ipsum</p>
      </Col>
      <Col xs = {8} className="bg-white pt-4 pb-4">
        <div className="stripe-left p-1 mb-3">
          <h6 className="text-uppercase mb-0 ps-2">Objective</h6>
        </div>
      </Col>
    </Row>
  )
}

export default Resume;