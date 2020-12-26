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
      numCourses: 0,
      gpa: "",
      isInvalid: Array(3).fill(false),
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    document.title = "GPA Calculator";
  }

  handleClose() {
    this.setState({
      showModal: false,
    });
  }

  handleChange(event) {
    this.setState({
      numCourses: event.target.value,
    });
  }

  calculate() {
    //validate inputs
    let isInvalid = Array(3).fill(false);
    if (document.getElementById('curr').value && document.getElementById('curr').value < 0 && document.getElementById('curr').value > 4) {
      isInvalid[0] = true;
    }
    if (document.getElementById('creditsEarned').value && document.getElementById('creditsEarned').value < 0) {
      isInvalid[1] = true;
    }
    if (!document.getElementById('numberCourses').value || document.getElementById('numberCourses').value < 1) {
      isInvalid[2] = true;
    }
    for (var bool = 0; bool < isInvalid.length; bool++) {
      if (isInvalid[bool]) {
        this.setState({
          isInvalid: isInvalid,
        });
        return;
      }
    }
    //calculate current semester gpa
    var totalCredits = 0.0;
    var totalPoints = 0;
    for (var i = 1; i <= this.state.numCourses; i++) {
      var grade = 'c'.concat(i, 'Grade');
      if (document.getElementById(grade).value) {
        const letterGrade = document.getElementById(grade).value;
        const coursePoints = LETTER_TO_NUMBER[letterGrade];

        var id = 'c'.concat(i, 'Cred');
        if (document.getElementById(id).value) {
          var courseCredits = parseInt(document.getElementById(id).value);
          totalPoints += parseFloat(coursePoints * courseCredits);
          totalCredits += courseCredits;
        }
      }
    }
    //add existing GPA
    if (document.getElementById('curr').value) {
      totalPoints += parseFloat(document.getElementById('curr').value) * parseFloat(document.getElementById('creditsEarned').value);
      totalCredits += parseInt(document.getElementById('creditsEarned').value);
    }
    var gpa = parseFloat(totalPoints) / parseFloat(totalCredits);
    if (isNaN(gpa)) {
      this.setState({
        showModal: true,
        isInvalid: isInvalid,
      });
    }
    else {
      this.setState({
        gpa: gpa,
        isInvalid: isInvalid,
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
          <Form.Control id={"c" + (index + 1) + "Grade"} as="select" defaultValue="">
            <option value="">Course Grade</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control placeholder="Course credits" id={"c" + (index + 1) + "Cred"} type="number" min="1" max="5" />
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
            There was a problem calculating your GPA. Please check your input values. Potential causes:
            <ul>
              <li>No courses have been inputted.</li>
              <li>Missing grade for course.</li>
              <li>Missing credit hours for course.</li>
              <li>Negative values.</li>
            </ul>
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
                <Form.Control id="curr" placeholder="Enter GPA" type="number" isInvalid={this.state.isInvalid[0]} />
                <Form.Control.Feedback type="invalid">GPA must be a value between 0 and 4.</Form.Control.Feedback>
              </Col>
              <Col md="6"></Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md="2">Credits Earned:</Form.Label>
              <Col>
                <Form.Control id="creditsEarned" placeholder="Enter completed credits" type="number" isInvalid={this.state.isInvalid[1]} />
                <Form.Control.Feedback type="invalid">Completed credits must be a nonnegative number.</Form.Control.Feedback>
              </Col>
              <Col md="6"></Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md="4">How many courses are you taking this semester?</Form.Label>
              <Col>
                <Form.Control id="numberCourses" onChange={this.handleChange} placeholder="Number of courses attempting" type="number" isInvalid={this.state.isInvalid[2]} />
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