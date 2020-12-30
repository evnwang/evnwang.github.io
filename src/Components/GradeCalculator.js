import React from "react";
import "./GradeCalculator.css";
import { Button, Form, Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const LETTER_TO_NUMBER = {
  "A": 4.0,
  "B+": 3.5,
  "B": 3.0,
  "C+": 2.5,
  "C": 2.0,
  "D": 1.0,
  "F": 0.0,
};

class GradeCalculator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false,
      currentGPA: null,
      creditsEarned: null,
      numCourses: 0,
      courseCredits: [],
      courseGrades: [],
      gpa: "",
      isInvalid: Array(3).fill(false),
      courseCreditsIsInvalid: [],
      courseGradeIsInvalid: [],
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleClose() {
    this.setState({
      showModal: false,
    });
  }

  handleChange(event) {
    const name = event.target.name;
    if (name.charAt(0) === "n") {
      this.setState({
        [name]: event.target.value,
        courseCredits: this.state.courseCredits.length > 0 ? this.state.courseCredits.slice(0, parseInt(event.target.value)) : Array(parseInt(event.target.value)).fill(null),
        courseGrades: this.state.courseGrades.length > 0 ? this.state.courseGrades.slice(0, parseInt(event.target.value)) : Array(parseInt(event.target.value)).fill(null),
      });
    }
    else {
      this.setState({
        [name]: event.target.value,
      });
    }
  }

  handleCourseChange(event) {
    const type = event.target.name.charAt(0);
    const index = event.target.name.charAt(1);
    if (type === "g") {
      let courseGrades = [...this.state.courseGrades];
      courseGrades[index] = event.target.value;
      this.setState({
        courseGrades: courseGrades,
      });
    }
    else {
      let courseCredits = [...this.state.courseCredits];
      courseCredits[index] = parseFloat(event.target.value);
      this.setState({
        courseCredits: courseCredits,
      });
    }
  }

  calculate() {
    //validate inputs
    let isInvalid = Array(3).fill(false);
    var coursesAreValid = true;
    let courseCreditsIsInvalid = [];
    let courseGradeIsInvalid = [];
    isInvalid[0] = (this.state.currentGPA && (this.state.currentGPA < 0 || this.state.currentGPA > 4)) || (!this.state.currentGPA && this.state.creditsEarned);
    isInvalid[1] = (this.state.creditsEarned && this.state.creditsEarned < 0) || (this.state.currentGPA && !this.state.creditsEarned);
    isInvalid[2] = this.state.numCourses < 1;
    if (this.state.numCourses > 0) {
      courseCreditsIsInvalid = Array(this.state.numCourses).fill(false);
      courseGradeIsInvalid = Array(this.state.numCourses).fill(false);
      for (var i = 0; i < this.state.numCourses; i++) {
        courseCreditsIsInvalid[i] = (this.state.courseCredits[i] && (this.state.courseCredits[i] < 1 || this.state.courseCredits[i] > 5)) || (!this.state.courseCredits[i] && this.state.courseGrades[i]);
        courseGradeIsInvalid[i] = (this.state.courseGrades[i] && this.state.courseGrades[i] === "") || (this.state.courseCredits[i] && !this.state.courseGrades[i]);
      }
      for (i = 0; i < this.state.numCourses; i++) {
        if (courseCreditsIsInvalid[i] || courseGradeIsInvalid[i]) {
          coursesAreValid = false;
          break;
        }
      }
    }
    if (!coursesAreValid || isInvalid.some(bool => bool)) {
      this.setState({
        isInvalid: isInvalid,
        courseCreditsIsInvalid: courseCreditsIsInvalid,
        courseGradeIsInvalid: courseGradeIsInvalid,
        gpa: "",
      });
      return;
    }
    //calculate current semester gpa
    var totalCredits = 0.0;
    var totalPoints = 0;
    for (i = 0; i < this.state.numCourses; i++) {
      if (this.state.courseGrades[i]) {
        const coursePoints = LETTER_TO_NUMBER[this.state.courseGrades[i]];
        const courseCredits = this.state.courseCredits[i];
        totalPoints += coursePoints * courseCredits;
        totalCredits += courseCredits;
      }
    }
    //add existing GPA
    if (this.state.currentGPA) {
      totalPoints += this.state.currentGPA * this.state.creditsEarned;
      totalCredits += parseFloat(this.state.creditsEarned);
    }
    var gpa = totalPoints / totalCredits;
    if (isNaN(gpa)) {
      this.setState({
        showModal: true,
        isInvalid: isInvalid,
        courseCreditsIsInvalid: courseCreditsIsInvalid,
        courseGradeIsInvalid: courseGradeIsInvalid,
        gpa: "",
      });
    }
    else {
      this.setState({
        gpa: gpa,
        isInvalid: isInvalid,
        courseCreditsIsInvalid: courseCreditsIsInvalid,
        courseGradeIsInvalid: courseGradeIsInvalid,
      });
    }
  }

  render() {
    let indices = [];
    for (var i = 0; i < this.state.numCourses; i++) {
      indices.push(i);
    }
    const courseInputs = indices.map(index => (
      <Form.Group as={Row} key={index}>
        <Form.Label column md="2">Course {index + 1}: </Form.Label>
        <Col>
          <Form.Control name={"g" + index} as="select" defaultValue="" onChange={this.handleCourseChange} isInvalid={this.state.courseGradeIsInvalid[index]}>
            <option value="">Course Grade</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">Please select a letter grade.</Form.Control.Feedback>
        </Col>
        <Col>
          <Form.Control placeholder="Course credits" name={"c" + index} type="number" onChange={this.handleCourseChange} isInvalid={this.state.courseCreditsIsInvalid[index]} />
          <Form.Control.Feedback type="invalid">This value must be between 1 and 5.</Form.Control.Feedback>
        </Col>
        <Col md="6"></Col>
      </Form.Group>
    ));
    return (
      <div className="calculator">
        <Modal show={this.state.showModal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            There was a problem calculating your GPA. Please check your input values again.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
        <Container fluid>
          <h1 className="pt-2" style={{ textAlign: "center" }}>Calculate Your GPA</h1>
          <Form>
            <Form.Label>Please input current GPA and credits earned, if applicable.</Form.Label>
            <Form.Group as={Row}>
              <Form.Label column md="2">Current GPA:</Form.Label>
              <Col>
                <Form.Control name="currentGPA" onChange={this.handleChange} placeholder="Enter GPA" type="number" isInvalid={this.state.isInvalid[0]} />
                <Form.Control.Feedback type="invalid">GPA must be a value between 0 and 4.</Form.Control.Feedback>
              </Col>
              <Col md="6"></Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md="2">Credits Earned:</Form.Label>
              <Col>
                <Form.Control name="creditsEarned" onChange={this.handleChange} placeholder="Enter completed credits" type="number" isInvalid={this.state.isInvalid[1]} />
                <Form.Control.Feedback type="invalid">Completed credits must be a nonempty, nonnegative number.</Form.Control.Feedback>
              </Col>
              <Col md="6"></Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md="4">How many courses are you taking this semester?</Form.Label>
              <Col>
                <Form.Control name="numCourses" onChange={this.handleChange} placeholder="Number of courses attempting" type="number" isInvalid={this.state.isInvalid[2]} />
                <Form.Control.Feedback type="invalid">You must supply at least one course.</Form.Control.Feedback>
              </Col>
              <Col md="4"></Col>
            </Form.Group>
          </Form>
          {indices.length > 0 ?
            <Row>
              <Col md="2"></Col>
              <Col style={{ textAlign: "center" }}>Grade</Col>
              <Col style={{ textAlign: "center" }}>Number of Credits</Col>
              <Col md="6"></Col>
            </Row> : ""}
          {courseInputs}
        </Container>
        <Container fluid>
          {this.state.gpa !== "" && (<h5 className="pb-3" style={{ color: "#d91111" }}>GPA: {this.state.gpa}</h5>)}
          <Link to="/">
            <Button className="mr-2 mb-4" style={{ letterSpacing: "1px" }}>Return to homepage.</Button>
          </Link>
          <Button variant="dark" className="mb-4" style={{ letterSpacing: "1px" }} onClick={this.calculate}>Calculate!</Button>
        </Container>
      </div>
    );
  }
}

export default GradeCalculator;