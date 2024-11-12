import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import weddingBanner from './assets/fashion-logo.webp' 

function HomePage() {
  return (
    <Container 
      className="text-center p-5" 
      style={{ backgroundColor: '#f8f9fa', color: '#343a40', border: '1px solid #ddd', borderRadius: '8px' }}
    >
      <Row>
        <Col>
          {/* Image */}
          <Image 
            src={weddingBanner}
            alt="Welcome" 
            fluid 
            className="mb-4" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          
          {/* Welcome Text */}
          <h1 className="mb-4">Nova Niche</h1>
          
          {/* Call to Action Button with Shadow */}
          <Button variant="primary" size="lg" className="mb-4 shadow-sm">
            Shop Now
          </Button>

          {/* Card Section */}
          <Card className="mt-4 shadow-sm" style={{ border: 'none' }}>
            <Card.Body>
              <Card.Title>Customer Favorites</Card.Title>
              <Card.Text>
              See what our customers can’t get enough of! These featured products have received rave reviews and are sure to impress.
              </Card.Text>
              <Button variant="outline-primary">View Products</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
