import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Hamza1.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Technology at an early age and have been hooked every since. I hope to learn more things... 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, HTML, CSS, Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Cloud and Network Infrastructures </b> and
                also in areas related to{" "}
                <b className="purple">
                  Network Management.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing Information Technology Infrastructures
              with <b className="purple">Programming</b>,
              <i>
                <b className="purple">
                  {" "}
                  Automation and Framework Integration
                </b>
              </i>
              &nbsp; with technologies like
              <i>
                <b className="purple"> Python and Powershell</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hnadeem67"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-nadeem67/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/chiefhamzanadeem?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
