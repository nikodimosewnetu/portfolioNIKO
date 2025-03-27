import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LMS from "../../Assets/Projects/LMS.png.png";
import Chat from "../../Assets/Projects/chat.png.png";
import vimbai from "../../Assets/Projects/vimbai.png.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="Learning-management-system"
              description="A Learning Management System (LMS) built using the MERN stack, enabling efficient course management and user interaction."
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="CHAT-APP"
              description="A real-time chat app built with the MERN stack, enabling seamless messaging and user interaction."
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vimbai}
              isBlog={false}
              title="Agency website"
              description="A visually stunning website built with Framer, offering smooth interactions and responsive design."
             
            />
          </Col>

          

          

         

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
