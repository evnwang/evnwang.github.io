import React from "react";
import { Navbar, Nav, Container, Col, Row, Card, Button } from "react-bootstrap";
import github from "../Assets/github_icon.png";
import linkedin from "../Assets/linkedin_icon.jpg";
import { Link } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div>
      <Container fluid className="pr-0 pl-0">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Navigation</Navbar.Brand>
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#proj">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
      <div className="img1">
        <div className="header1">
          <span className="border">Welcome to my website!</span>
        </div>
        <div className="header2">
          <span className="border">Evan Wang</span>
        </div>
      </div>
      <div id="about" className="img2">
        <Container fluid className="pt-5">
          <Row className="pb-3">
            <div className="header3">
              <span className="border">About Me</span>
            </div>
          </Row>
          <Row className="pt-5 pl-5 pr-5">
            <Col>
              <Card text="white" border="light">
                <Card.Body>
                  <Card.Title>Education</Card.Title>
                  <ul>
                    <li>Rutgers University: B.S. Degree in Computer Science, Minor in Mathematics</li>
                    <li>Relevant Coursework: Linear Algebra, Data Structures, Databases, Design and Analysis of Alorgorithms, Computer Architecture, Software Methodology, Software Engineering, Data Science</li>
                  </ul>
                  <Card.Title>Experience</Card.Title>
                  <ul>
                    <li>Amazon.com, Inc. - Software Development Engineering Intern</li>
                    <li>Rutgers School of Social Work - Application Developer</li>
                  </ul>
                  <Card.Title>Skills</Card.Title>
                  <ul>
                    <li>Back-end and full-stack development</li>
                    <li>Java, Kotlin, Python, C, C#, Javascript, HTML/CSS, SQL</li>
                    <li>Git, Jira, AWS, React, Unity </li>
                  </ul>
                  <Card.Title>Interests/Hobbies</Card.Title>
                  <ul>
                    <li>In my free time, I enjoy being active. I am a big sports fanatic as I both play and watch sports. I also like hiking and being around nature.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="proj" className="img3">
        <Container fluid className="pt-5">
          <Row className="pb-5">
            <div className="header3">
              <span className="border">Projects</span>
            </div>
          </Row>
          <Row className="pt-3">
            <Col md="6">
              <Card style={{ height: "100%" }} text="white" border="light">
                <Card.Body>
                  <Card.Title>Customizable Chess</Card.Title>
                  <Card.Text>Semester long project for Software Engineering. Our website allows you to play chess as well as customize your own boards for others to use. Built with React, Firebase, Express.js and Socket.IO</Card.Text>
                  <Card.Link href="https://customizablechess.web.app/" target="_blank" rel="noreferrer">
                    <Button>Check it out!</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card style={{ height: "100%" }} text="white" border="light">
                <Card.Body>
                  <Card.Title>BuyMe</Card.Title>
                  <Card.Text>Semester long project for Principles of Information & Data Management (Databases). Our website mimicks the functions of Ebay, including bidding, buying and selling, browsing and search, and account handling. Built with AWS EC2 instance, Java, JSP, MySQL and HTML/CSS.</Card.Text>
                  <Card.Link href="https://github.com/fireteam99/buyme">
                    <Button>See the repository.</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="pt-2 pb-2">
            <Col md="6">
              <Card style={{ height: "100%" }} text="white" border="light">
                <Card.Body>
                  <Card.Title>Dog Matcher</Card.Title>
                  <Card.Text>Final project for Principles of Programming Languages. Our application finds you a dog that suits your personality traits. Built using Python, Flask and HTML/CSS.</Card.Text>
                  <Card.Link href="https://github.com/RGT123/PrinProgProject">
                    <Button>See the repository.</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card style={{ height: "100%" }} text="white" border="light">
                <Card.Body>
                  <Card.Title>GPA Calculator</Card.Title>
                  <Card.Text>Simple tool for calculating your GPA. Built when I started learning Javascript.</Card.Text>
                  <Link to="/gradecalculator">
                    <Button>Try it out!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact" className="img1">
        <div className="header4">
          <span className="border">Links</span>
        </div>
        <div className="link-container">
          <a href="https://www.github.com/evnwang" target="_blank" rel="noreferrer" className="mr-2 ml-2">
            <img src={github} className="center" alt="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/evan-wang-" target="_blank" rel="noreferrer" className="mr-2 ml-2">
            <img src={linkedin} className="center" alt="linkedin-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}