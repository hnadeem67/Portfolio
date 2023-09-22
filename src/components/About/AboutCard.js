import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hamza Nadeem </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br /> I am a college Graduate with a Batcholors and Masters in Computer Science (CS)
            from The New York Institute of Technology.
            <br />
            Additionally, I am currently employed as a Client Engineer at
            Coretelligent.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Seize the moment, for within its fleeting embrace lies the power to transform dreams into realities and illuminate the path to a life truly lived."{" "}
          </p>
          <footer className="blockquote-footer">HAMZA NADEEM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
