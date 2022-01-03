import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Field } from 'redux-form';
import Textfield from '../common/Textfield';
import { alphaNumeric, required, validYear } from './DetailsForm';

const Education = ({ fields }) => {
  useEffect(() => {
    if(!fields.length) {
      fields.push({});
    }
  });
  return (
    <div>
      {fields.map((education, index) =>
        <div key = {index} className = "p-3">
          <div className = "d-flex justify-content-between">
            <h6>#{index + 1}</h6>
            {index !== 0 ?
              <Button
                variant = "danger"
                onClick = {() => fields.remove(index)}>
                  <i class = "fa fa-remove" />
              </Button> 
              : null
            }
          </div>
          <Field
            name = {`${education}.institute`}
            type = "text"
            component = {Textfield}
            validate={[required, alphaNumeric]}
            placeholder = "e.g. ABC College etc"
            label = "Institute"/>
          <Row>
            <Col xs = {12} lg = {5}>
              <Field
              name = {`${education}.fromYear`}
              type = "text"
              component = {Textfield}
              validate={[required, validYear]}
              placeholder = "e.g. 2018"
              label = "From Year"/>
            </Col>
            <Col xs = {12} lg = {2} className = "d-flex justify-content-center align-items-center">
              <span> - </span>
            </Col>
            <Col xs = {12} lg = {5}>
              <Field
                name = {`${education}.toYear`}
                type = "text"
                component = {Textfield}
                validate={[required, validYear]}
                placeholder = "e.g. 2020"
                label = "To Year"/>
            </Col>
          </Row>
          <Field
            name = {`${education}.degree`}
            type = "text"
            component = {Textfield}
            validate={[required, alphaNumeric]}
            placeholder = "e.g. Bachelor of Technology"
            label = "Degree"/>
        </div>
      )}
      <div className = "d-flex justify-content-center mb-2">
        <Button variant = "success" onClick = {() => fields.push({})}>
          <i className = "fa fa-plus mr-2" aria-hidden = "true"></i>
          More
        </Button>
      </div>
    </div>
  )
}

export default Education;