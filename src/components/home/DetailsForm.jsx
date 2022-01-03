import React, { useEffect } from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form';
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import Textfield from '../common/Textfield';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import { useNavigate } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

export const required = value => (value ? undefined : 'Required');
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const validYear = value => value && (isNaN(Number(value)) || !(Number(value) >= 1900 && Number(value) <= new Date().getFullYear())) ? 'Invalid Year' : undefined;
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const phoneNumber = value =>
  value && !/^\+[1-9]{1}[0-9]{3,14}$/i.test(value)
    ? 'Invalid phone number'
    : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters allowed'
    : undefined;
const alphaOnly = value =>
  value && /[^a-zA-Z ]/i.test(value)
    ? 'Only alphabets allowed'
    : undefined;

const SimpleForm = props => {
  const { handleSubmit, reset } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const jsonInitialValues = localStorage.getItem("resumeForm");
    if(jsonInitialValues) {
      const initialValues = JSON.parse(jsonInitialValues);
      props.initialize(initialValues);
    }
  }, []);

  const onSubmit = (values) => {
    localStorage.setItem('resumeForm', JSON.stringify(values));
    navigate('/print-preview');
  }

  const onReset = e => {
    localStorage.removeItem('resumeForm');
    props.initialize({});
    reset(e);
  }

  return (
    <Form onSubmit = {handleSubmit(onSubmit)}>
      <Row>
        <Col xs = {12} xl = {6}>
          <Field
            name = "firstName"
            component = {Textfield}
            type = "text"
            placeholder = "e.g. John"
            label = "First Name"
            validate={[required, alphaOnly]}
          />
        </Col>
        <Col xs = {12} xl = {6}>
          <Field
            name = "lastName"
            component = {Textfield}
            type = "text"
            placeholder = "e.g. Doe"
            label = "Last Name"
            validate={[required, alphaOnly]}
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
            validate={[required, alphaNumeric]}
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
            validate={[required, email]}
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
            validate={[required]}
          />
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
          <Field
            name = "phone"
            component = {Textfield}
            type = "tel"
            placeholder = "e.g. +919876543210"
            label = "Phone"
            validate={[required, phoneNumber]}
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
            placeholder = "Your mission statement..."
            label = "Objective"
            validate={[required]}
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
        <Col xs = {12} className = "text-right p-3">
          <Button variant = "danger" onClick = {onReset} className = "mt-2">
            <i className = "fa fa-times mr-2" aria-hidden = "true"></i>
            Reset
          </Button>
          <Button variant = "success" type = "submit" className = "ml-3 mt-2">
            <i className = "fa fa-print mr-2" aria-hidden = "true" />
            Preview
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

const validate = values => {
  const errors = {}
  const educationArrayErrors = []
  values.education && values.education.forEach((education, educationIndex) => {
    const educationErrors = {}
    if (education.fromYear && education.toYear && education.toYear < education.fromYear) {
      educationErrors.toYear = 'To Year cannot be less than From Year';
      educationArrayErrors[educationIndex] = educationErrors;
    }
  })
  if (educationArrayErrors.length) {
    errors.education = educationArrayErrors;
  }
  const experienceArrayErrors = []
  values.experience && values.experience.forEach((experience, experienceIndex) => {
    const experienceErrors = {}
    if (experience.fromYear && experience.toYear && experience.toYear < experience.fromYear) {
      experienceErrors.toYear = 'To Year cannot be less than From Year'
      experienceArrayErrors[experienceIndex] = experienceErrors;
    }
  })
  if (experienceArrayErrors.length) {
    errors.experience = experienceArrayErrors;
  }
  return errors;
}


export default reduxForm({
  form: 'resumeForm',
  destroyOnUnmount: false,
  validate
})(SimpleForm);