import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
        <div className="header3">
          <span className="border">About Me</span>
        </div>
        <div className="about">
          <div className="border">
            <h5>Education</h5>
            <ul>
              <li>Rutgers University: B.S. Degree in Computer Science, Minor in Mathematics</li>
              <li>Relevant Coursework: Linear Algebra, Data Structures, Databases, Design and Analysis of Alorgorithms, Computer Architecture, Software Methodology, Software Engineering, Data Science</li>
            </ul>
            <h5>Experience</h5>
            <ul>
              <li>Amazon.com, Inc. - Software Development Engineering Intern</li>
              <li>Rutgers School of Social Work - Application Developer</li>
            </ul>
            <h5>Skills</h5>
            <ul>
              <li>Back-end and full-stack development</li>
              <li>Java, Kotlin, Python, C, C#, Javascript, HTML/CSS, SQL</li>
            </ul>
            <h5>Interests/Hobbies</h5>
            <ul>
              <li>In my free time, I enjoy being active. I am a big sports fanatic as I both play and watch sports. I also like hiking and being around nature.</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="proj" className="img3">
        <div className="header3">
          <span className="border">Projects</span>
        </div>
        <a className="proj" style={{ top: "20%" }} href="https://customizablechess.web.app/" target="_blank" rel="noreferrer">Customizable Chess</a>
        <a className="proj" style={{ top: "30%" }} href="https://github.com/fireteam99/buyme">BuyMe Auction Site</a>
        <a className="proj" style={{ top: "40%" }} href="https://github.com/RGT123/PrinProgProject">Dog Matcher</a>
        <Link className="proj" style={{ top: "50%" }} to="/gradecalculator">GPA Calculator</Link>
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
        <div className="email">
          <span className="border">Email: wangevan.ew@gmail.com</span>
        </div>
      </div>
    </div>
  );
}