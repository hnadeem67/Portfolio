import React from "react";
import { Col, Row } from "react-bootstrap";
//import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiCisco,
  DiHtml5,
  DiCss3,
  DiDebian,
  DiDocker,
  DiPython,
  DiGit,
  DiJava,
  DiRasberryPi,
  DiLinux,
} from "react-icons/di";
import {
  SiFirebase,
  SiLinuxcontainers,
  SiApache
} from "react-icons/si";
import {VscAzure, } from "react-icons/vsc";
//import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCisco />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDebian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinuxcontainers />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRasberryPi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
      </Col>
    </Row>
  );
}

export default Techstack;
