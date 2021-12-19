import React from 'react';
import {
  Form
} from 'react-bootstrap';

const Textfield = (props) => {
  const {
    input = {}
  } = props;
  return (
    <div className="mb-3 mt-2">
      <label className="d-block text-uppercase h6 text-field-label">{props.label}</label>
      <Form.Control type="text" className="text-field" {...props} {...input} />
    </div>
  )
}

export default Textfield;