import react, {Component} from 'react';
import {Modal, Row, Col, Container, Button} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import '../styles/styles.css';


/* const Applicants =(props) =>{
    
    return(
        <div>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Applicants</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    
    )
} */

function Applicants (params) {
    return (
      <Modal className="Modal" {...params} aria-labelledby="contained-modal-title-center">
        <Modal.Title id="contained-modal-title-venter">
            Applicants
            <Modal.Header className="Close" closeButton/>
        </Modal.Title>
        
        <Modal.Body className="show-grid">
          <Container className="container-box">
            <Col className="Cols">
              <Row className="Rows" xs={12} md={8}>
                .col-xs-12 .col-md-8
              </Row>
              <Row className="Cols" xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Row >
            </Col>
  
            <Row className="Rows">
              <Col className="Cols" xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col className="Cols" xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>

            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

export default Applicants