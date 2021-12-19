import "./css/home.css";

import React from 'react';
import { 
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import Form from "../components/home/Form";
import Resume from "../components/home/Resume";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../actions/Home";

function Home(props) {
  const selectedTheme = useSelector(store => store.home.theme);
  const dispatch = useDispatch();
  const themes = ["green", "red", "yellow", "blue"];
  return (
    <Container fluid>
      <Row>
        <Col xs = {12} lg = {3} className = "form-bg p-4">
          <h3>Profile</h3>
          <Form />
        </Col>
        <Col xs = {12} lg = {7} xl = {6} className = "resume-bg p-5 d-flex justify-content-center">
          <Resume theme = {selectedTheme} />
        </Col>
        <Col xs = {12} lg = {2} xl = {3} className = "form-bg p-5 preview-templates">
          <h3 className="mb-3">Themes</h3>
          {themes.map(theme => (
            <Row key = {theme} className = "mb-3 position-relative theme-preview">
              <Col xs = {12}>
                <Resume theme = {theme} />
                <Button variant = "success" className="useBtn" onClick = {() => dispatch(selectTheme(theme))}>
                  Select Theme
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Home;