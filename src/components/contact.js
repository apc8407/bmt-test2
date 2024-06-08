import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://script.google.com/macros/s/AKfycbwbMNVTaElq9BmApe7a4M3vVh-JymxDHT4eISCTk1UsOVrMt90oEL3C6Q-FNL-AYEMq/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      description: ''
    });
  };

return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='form' onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="form-group-spacing" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name='name' 
                  placeholder="Enter your name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-group-spacing" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  name='email' 
                  placeholder="Enter email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-group-spacing" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  name='phone' 
                  placeholder="Enter phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="form-group-spacing" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                  className='description-textarea'
                  type="text" 
                  name='description' 
                  placeholder="Enter description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="submit-button-container">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default AppContact;
