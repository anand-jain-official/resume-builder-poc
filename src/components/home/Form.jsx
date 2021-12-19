import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Textfield from '../common/Textfield';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import { useNavigate } from 'react-router-dom';

const SimpleForm = props => {
  const { handleSubmit, reset } = props;
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs = {12} xl = {6}>
          <Field
            name="firstName"
            component={Textfield}
            type="text"
            placeholder="First Name"
            label="First Name"
          />
        </Col>
        <Col xs = {12} xl = {6}>
          <Field
            name="lastName"
            component={Textfield}
            type="text"
            placeholder="Last Name"
            label="Last Name"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name="designation"
            component={Textfield}
            type="text"
            placeholder="Designation"
            label="Designation"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name="email"
            component={Textfield}
            type="email"
            placeholder="Email"
            label="Email"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name="address"
            component={Textfield}
            type="text"
            placeholder="Address"
            label="Address"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name="phone"
            component={Textfield}
            type="tel"
            placeholder="Phone"
            label="Phone"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name="objective"
            as = "textarea"
            component={Textfield}
            type="text"
            placeholder="Objective"
            label="Objective"
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs = {12}>
          <h5>Education</h5>
          <FieldArray name="education" component={Education}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs = {12}>
          <h5>Experience</h5>
          <FieldArray name="experience" component={Experience}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs = {12}>
          <h5>Skills</h5>
          <Skills />
        </Col>
      </Row>
      <Row>
        <Col xs = {12} className = "text-end p-3">
          <Button variant="danger" onClick={reset} className="mt-2">
            <i className="fa fa-times me-2" aria-hidden="true"></i>
            Reset
          </Button>
          <Button variant="success" onClick = {() => navigate('/print-preview')} className="ms-3 mt-2">
            <i className="fa fa-print me-2" aria-hidden="true" />
            Preview
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default reduxForm({
  form: 'resumeForm',
  destroyOnUnmount: false
})(SimpleForm)