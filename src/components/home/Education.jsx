import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field } from 'redux-form';
import Textfield from '../common/Textfield';

const Education = ({ fields }) => {
  useEffect(() => {
    if(!fields.length) {
      fields.push({});
    }
  });
  return (
    <div>
      {fields.map((education, index) =>
        <div key={index} className="border p-3 mb-3">
          <div className="d-flex justify-content-between">
            <h6>#{index + 1}</h6>
            <button
              type="button"
              title="Remove Member"
              onClick={() => fields.remove(index)}>
                <i class="fa fa-remove" />
            </button>
          </div>
          <Field
            name={`${education}.institute`}
            type="text"
            component={Textfield}
            label="Institute"/>
          <Row>
            <Col xs = {12} lg = {5}>
              <Field
              name={`${education}.fromYear`}
              type="number"
              component={Textfield}
              label="From Year"/>
            </Col>
            <Col xs = {12} lg = {2} className="d-flex justify-content-center align-items-center">
              <span> - </span>
            </Col>
            <Col xs = {12} lg = {5}>
              <Field
                name={`${education}.toYear`}
                type="number"
                component={Textfield}
                label="To Year"/>
            </Col>
          </Row>
          <Field
            name={`${education}.degree`}
            type="text"
            component={Textfield}
            label="Degree"/>
        </div>
      )}
      <div className="d-flex justify-content-center mt-3">
        <button type="button" onClick={() => fields.push({})}>More</button>
      </div>
    </div>
  )
}

export default Education;