import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <Row>
            <Col md={6}>
              AG Enterprise
            </Col>

            <Col md={6}>
              <div className="d-none d-md-flex gap-4 align-item-center justify-content-md-end footer-links">
               
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </React.Fragment>;
};
export default Footer;