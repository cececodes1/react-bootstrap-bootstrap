import React from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import errorImage from './assets/404-error.jpg';
function NotFound() {
  return (
    <Container className="text-center p-5" style={{ color: '#495057' }}>
      <Row className="align-items-center">
        <Col md={6}>
          {/* Image */}
          <Image 
            src={errorImage}
            alt="404 Not Found"  
            className="mb-4"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
        <Col md={6}>
          {/* Error Message */}
          <h1 className="mb-3" style={{ color: '#dc3545' }}>404 - Not Found</h1>
          <p>Oops! The page you are looking for doesn’t exist.</p>

          {/* Back to Home Navigation */}
          <Nav.Link href="/" as={Button} variant="outline-secondary" size="lg" className="mt-4">
            Go to Home
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
