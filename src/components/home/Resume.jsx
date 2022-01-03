import React from 'react';
import {
  Row,
  Col
} from "react-bootstrap";
import { useSelector, shallowEqual } from 'react-redux';

const Resume = (props, ref) => {

  const form = useSelector(store => props.preview ? null : store.form.resumeForm, shallowEqual);

  let values = form && form.values ? form.values : {};

  const savedValues = localStorage.getItem('resumeForm');
  if(props.printPreview && savedValues) {
    values = JSON.parse(savedValues);
  }

  return (
    <Row className = {`height-100 resume ${props.theme}-theme`} ref = {ref}> {/* The ref from the parent is assigned to a the DOM element here in the child */}
      <Col xs = {4} className = "theme-bg pt-3 pb-3 pr-4">
        <h4 className = "mb-0">
          {values.firstName} {" "} {values.lastName}
        </h4>
        <p>
          {values.designation}
        </p>
        <div className = "stripe-left theme-bg-dark p-1 mb-3">
          <h6 className = "text-uppercase mb-0 pl-2">Profile</h6>
        </div>
        <h6 className = "text-uppercase mb-0">Email</h6>
        <p>
          {values.email}
        </p>
        <h6 className = "text-uppercase mb-0">Address</h6>
        <p>
          {values.address}
        </p>
        <h6 className = "text-uppercase mb-0">Phone</h6>
        <p>
          {values.phone}
        </p>
      </Col>
      <Col xs = {8} className = "bg-white pt-3 pb-3 right-section pr-4">
        <div className = "stripe-left theme-bg-dark p-1 mb-3 mt-3">
          <h6 className = "text-uppercase mb-0 pl-2">Objective</h6>
        </div>
        <p className = "text-dark">
          {values.objective}
        </p>
        <div className = "stripe-left theme-bg-dark p-1 mb-2 mt-3">
          <h6 className = "text-uppercase mb-0 pl-2">Work Experience</h6>
        </div>
        {values.experience ?
          values.experience.map(exp => (
            <div className = "mt-3">
              <h6 className = "mb-1 org-name">{exp.company}</h6>
              <div className = "d-flex justify-content-between">
                <span>{exp.designation}</span>
                <span>
                  <i>({exp.fromYear} - {exp.toYear})</i>
                </span>
              </div>
            </div>
          ))
          : null
        }
        <div className = "stripe-left theme-bg-dark p-1 mb-2 mt-3">
          <h6 className = "text-uppercase mb-0 pl-2">Education</h6>
        </div>
        {values.education ?
          values.education.map(edu => (
            <div className = "mt-3">
              <h6 className = "mb-1 org-name">{edu.institute}</h6>
              <div className = "d-flex justify-content-between">
                <span>{edu.degree}</span>
                <span>
                  <i>({edu.fromYear} - {edu.toYear})</i>
                </span>
              </div>
            </div>
          ))
          : null
        }
        <div className = "stripe-left theme-bg-dark p-1 mb-3 mt-3">
          <h6 className = "text-uppercase mb-0 pl-2">Skills</h6>
        </div>
        <div className = "d-flex flex-wrap">
          {values.skills ? values.skills.map(skill => <span className = "badge text-light theme-bg m-1">{skill.name}</span>) : null}
        </div>
      </Col>
    </Row>
  )
}

export default React.forwardRef(Resume); // forwardRef is used to forward the ref correctly to the child component from the parent.