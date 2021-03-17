import react, {Component} from 'react';
import {Modal, Row, Col, Container, Button} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import '../styles/styles.css';
import profile from '../styles/images/profile.svg';

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
            <Modal.Header className="close" closeButton></Modal.Header>
        </Modal.Title>
        
        <Modal.Body className="show-grid">
          <Container className="container-box">
            <Row className="Rows">
              <Col className="Col" xs={2} md={2}>
                <span className="count">1</span>                         {/* count */}
              </Col>
              <Col className="Cols" xs={4} md={4}>
                  
                <a href="#" className="username">Vishal Rathore</a>   
              </Col>
              <Col className="Cols" xs={4} md={4}>
                <button className="btn" value="submit">Approve</button>
                <button className="cancel" value="cancel">Reject</button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

export default Applicants