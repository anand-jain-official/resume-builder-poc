import React from 'react';
import {
  Row,
  Col,
  Badge
} from "react-bootstrap";
import { useSelector } from 'react-redux';

const Resume = (props, ref) => {
  const form = useSelector(store => store.form.resumeForm);
  const values = form && form.values? form.values : {};
  const fullName = values.firstName ? `${values.firstName} ${values.lastName ? values.lastName : ""}` : "Anand Jain";
  return (
    <Row className = {`height-100 resume ${props.theme}-theme`} ref = {ref}>
      <Col xs={4} className="theme-bg pt-3 pb-3 pe-4">
        <h4 className="mb-0">{fullName}</h4>
        <p>Full Stack Developer</p>
        <div className="stripe-left theme-bg-dark p-1 mb-3">
          <h6 className="text-uppercase mb-0 ps-2">Profile</h6>
        </div>
        <h6 className="text-uppercase mb-0">Email</h6>
        <p>{values.email || "dev@someorg.com"}</p>
        <h6 className="text-uppercase mb-0">Address</h6>
        <p>{values.address || "H1, X City Homes, MG Lane, Main Street, Mumbai"}</p>
        <h6 className="text-uppercase mb-0">Phone</h6>
        <p>{values.phone || "+91 9876543210"}</p>
      </Col>
      <Col xs={8} className="bg-white pt-3 pb-3 right-section pe-4">
        <div className="stripe-left theme-bg-dark p-1 mb-3 mt-3">
          <h6 className="text-uppercase mb-0 ps-2">Objective</h6>
        </div>
        <p className="text-dark">
          {values.objective ?
            values.objective
            :
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum!`
          }
        </p>
        <div className="stripe-left theme-bg-dark p-1 mb-2 mt-3">
          <h6 className="text-uppercase mb-0 ps-2">Work Experience</h6>
        </div>
        {values.experience ?
          values.experience.map(exp => (
            <div className="mt-3">
              <h5 className="mb-1">{exp.company || "Tesla Motors"}</h5>
              <div className="d-flex justify-content-between">
                <span>{exp.designation || "Customer Service Representative"}</span>
                <span>
                  <i>({exp.fromYear || "2020"} - {exp.toYear || "2022"})</i>
                </span>
              </div>
            </div>
          ))
          : null
        }
        <div className="stripe-left theme-bg-dark p-1 mb-2 mt-3">
          <h6 className="text-uppercase mb-0 ps-2">Education</h6>
        </div>
        {values.education ?
          values.education.map(edu => (
            <div className="mt-3">
              <h5 className="mb-1">{edu.institute || "Imperial College"}</h5>
              <div className="d-flex justify-content-between">
                <span>{edu.degree || "Computer Science"}</span>
                <span>
                  <i>({edu.fromYear || "2014"} - {edu.toYear || "2018"})</i>
                </span>
              </div>
            </div>
          ))
          : null
        }
        <div className="stripe-left theme-bg-dark p-1 mb-3 mt-3">
          <h6 className="text-uppercase mb-0 ps-2">Skills</h6>
        </div>
        <div className="d-flex">
          {values.skills ? values.skills.map(skill => <span className = "badge text-light theme-bg">{skill.name}</span>) : null}
        </div>
      </Col>
    </Row>
  )
}

export default React.forwardRef(Resume);