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
  const selectThemeHandler = theme => {
    dispatch(selectTheme(theme));
    sessionStorage.setItem("theme", theme);
  }
  return (
    <Container fluid>
      <Row>
        <Col xs = {12} lg = {3} className = "form-bg p-4">
          <h3>Profile</h3>
          <hr />
          <Form />
        </Col>
        <Col xs = {12} lg = {6} xl = {7} className = "resume-bg p-5 d-flex justify-content-center">
          <Resume theme = {selectedTheme} />
        </Col>
        <Col xs = {12} lg = {3} xl = {2} className = "form-bg p-4 preview-templates">
          <h3 className = "mb-3 text-center">Themes</h3>
          <hr />
          <Row>
            {themes.map(theme => (
              <Col key = {theme} xs = {6} sm = {4} lg = {12} className = "mb-3 position-relative theme-preview d-flex justify-content-center">
                <Resume theme = {theme} preview />
                <Button variant = "success" className = "useBtn" onClick = {() => selectThemeHandler(theme)}>
                  Select Theme
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;