import React from 'react';
import {
  Form
} from 'react-bootstrap';

const Textfield = (props) => {
  const {
    input = {}
  } = props;
  return (
    <div className="mb-2">
      <label className="d-block text-uppercase h6">{props.label}</label>
      <Form.Control type="text" {...props} {...input} />
    </div>
  )
}

export default Textfield;