import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Files = () => {
  return (
    <Card className="mt-3">
      <Card.Body>
        <h4 className="header-title mb-3">Project Files</h4>
        <div className="d-flex mb-3">
          <div className="flex-shrink-0">
            <i className="mdi mdi-file-pdf text-danger" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="mt-0 mb-1">Project Documentation</h5>
            <p className="text-muted mb-0">PDF File</p>
          </div>
        </div>
        <div className="d-flex mb-3">
          <div className="flex-shrink-0">
            <i className="mdi mdi-file-word text-primary" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="mt-0 mb-1">Project Report</h5>
            <p className="text-muted mb-0">Word File</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Files; 