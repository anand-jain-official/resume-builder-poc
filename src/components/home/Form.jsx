import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form';
import {
  Row,
  Col
} from 'react-bootstrap';
import Textfield from '../common/Textfield';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs = {12} lg = {6}>
          <Field
            name="firstName"
            component={Textfield}
            type="text"
            placeholder="First Name"
            label="First Name"
          />
        </Col>
        <Col xs = {12} lg = {6}>
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
          <h5>Education</h5>
          <FieldArray name="education" component={Education}/>
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <h5>Experience</h5>
          <FieldArray name="experience" component={Experience}/>
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <h5>Skills</h5>
          <Skills />
        </Col>
      </Row>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)