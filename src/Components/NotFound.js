// src/NotFound.js
import React from 'react';
import { Container, Alert } from 'react-bootstrap';
//message to display when page not found
const NotFound = () => {
  return (
    <Container className="mt-5">
      <Alert variant="danger">
        <Alert.Heading>404 Not Found</Alert.Heading>
        <p>
          The page you are looking for does not exist. Please check the URL or return to the home page.
        </p>
      </Alert>
    </Container>
  );
};

export default NotFound;
