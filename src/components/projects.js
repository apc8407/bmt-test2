import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import projectsImage from '../assets/images/projects.png';

function AppProjects() {
  return (
    <section id="projects" className="block projects-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Projects</h2>
          <div className="subtitle">projects and client associations</div>
        </div>
        <Row>
          <Col>
            <Image src={projectsImage} alt="Projects" className="project-image" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppProjects;