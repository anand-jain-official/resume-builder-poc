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
  const onSubmit = () => {
    navigate('/print-preview');
  }
  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <Row>
        <Col xs = {12} xl = {6}>
          <Field
            name = "firstName"
            component = {Textfield}
            type = "text"
            placeholder = "e.g. John"
            label = "First Name"
          />
        </Col>
        <Col xs = {12} xl = {6}>
          <Field
            name = "lastName"
            component = {Textfield}
            type = "text"
            placeholder = "e.g. Doe"
            label = "Last Name"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name = "designation"
            component = {Textfield}
            type = "text"
            placeholder = "e.g. Software Developer"
            label = "Designation"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name = "email"
            component = {Textfield}
            type = "email"
            placeholder = "e.g. test@example.com"
            label = "Email"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name = "address"
            component = {Textfield}
            type = "text"
            placeholder = "e.g. h1, street, city, state..."
            label = "Address"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name = "phone"
            component = {Textfield}
            type = "tel"
            placeholder = "e.g. 91 9876543210"
            label = "Phone"
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name = "objective"
            as = "textarea"
            component = {Textfield}
            type = "text"
            placeholder = ""
            label = "Objective"
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs = {12}>
          <h5>Education</h5>
          <FieldArray name = "education" component = {Education}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs = {12}>
          <h5>Experience</h5>
          <FieldArray name = "experience" component = {Experience}/>
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
          <Button variant = "danger" onClick = {reset} className = "mt-2">
            <i className = "fa fa-times me-2" aria-hidden = "true"></i>
            Reset
          </Button>
          <Button variant = "success" type = "submit" className = "ms-3 mt-2">
            <i className = "fa fa-print me-2" aria-hidden = "true" />
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