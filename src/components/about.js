import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p style={{ textAlign: 'justify' }}>At BMT Consulting Services LLC (a NYS and Port Authority Certified M/WBE), we are dedicated to delivering precise and comprehensive cost estimating and value engineering solutions for construction projects. Our team of experienced professionals collaborates closely with clients, providing accurate cost assessments and risk evaluations from the conceptual phase through to project completion. We pride ourselves on our ability to adapt and refine cost plans as designs evolve, ensuring financial efficiency and project success.</p>
            <p style={{ textAlign: 'justify' }}>With expertise spanning multiple market sectors—including commercial, aviation, education, government, infrastructure, transportation, hospitality, and industrial—we leverage advanced software tools and industry best practices to offer unparalleled project management and cost control services. Our commitment to excellence and client satisfaction drives us to continuously explore innovative value engineering options, ensuring optimal outcomes for every project.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;