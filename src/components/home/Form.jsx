import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {
  Row,
  Col
} from 'react-bootstrap';
import Textfield from '../common/Textfield';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
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