import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Field } from 'redux-form';
import Textfield from '../common/Textfield';

const Experience = ({ fields }) => {
  useEffect(() => {
    if(!fields.length) {
      fields.push({});
    }
  });
  return (
    <div>
      {fields.map((experience, index) =>
        <div key={index} className="p-3">
          <div className="d-flex justify-content-between">
            <h6>#{index + 1}</h6>
            {index !== 0 ?
              <Button
                variant = "danger"
                onClick={() => fields.remove(index)}>
                  <i class="fa fa-remove" />
              </Button> 
              : null
            }
          </div>
          <Field
            name={`${experience}.company`}
            type="text"
            component={Textfield}
            label="Company"/>
          <Row>
            <Col xs = {12} lg = {5}>
              <Field
              name={`${experience}.fromYear`}
              type="number"
              component={Textfield}
              label="From Year"/>
            </Col>
            <Col xs = {12} lg = {2} className="d-flex justify-content-center align-items-center">
              <span> - </span>
            </Col>
            <Col xs = {12} lg = {5}>
              <Field
                name={`${experience}.toYear`}
                type="number"
                component={Textfield}
                label="To Year"/>
            </Col>
          </Row>
          <Field
            name={`${experience}.designation`}
            type="text"
            component={Textfield}
            label="Designation"/>
        </div>
      )}
      <div className="d-flex justify-content-center mb-2">
        <Button variant="success" onClick={() => fields.push({})}>
          <i className="fa fa-plus me-2" aria-hidden="true"></i>
          More
        </Button>
      </div>
    </div>
  )
}

export default Experience;