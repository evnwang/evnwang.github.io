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
            Hi, I am currently a student at Rutgers University - New Brunswick pursuing a Bachelor's degree in computer
            science with a minor in mathematics.
        <br />
            <br />
        Avid back-end and full-stack developer.
        <br />
            <br />
        My hobbies and interests include playing and watching sports as well as hiking. I enjoy being active when I'm
        not working inside. Feel free to reach out!
      </div>
        </div>
      </div>
      <div id="proj" className="img3">
        <div className="header3">
          <span className="border">Projects</span>
        </div>
        <a className="proj" style={{ top: "20%" }} href="https://customizablechess.web.app/" target="_blank" rel="noreferrer">Customizable Chess</a>
        <Link className="proj" style={{ top: "30%" }} to="/gradecalculator">GPA Calculator</Link>
        <div className="proj" style={{ top: "40%" }}>BuyMe Auction Site</div>
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
          <span className="border">Email: evan.wang@rutgers.edu</span>
        </div>
      </div>
    </div>
  );
}