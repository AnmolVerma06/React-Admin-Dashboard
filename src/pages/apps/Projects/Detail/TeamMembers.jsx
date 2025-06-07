import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeamMembers = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Team Members</h4>
        <div className="d-flex mb-3">
          <img
            src="/src/assets/images/users/user-2.jpg"
            className="me-2 rounded-circle"
            height="32"
            alt=""
          />
          <div className="w-100">
            <h5 className="mt-0 mb-1">John Doe</h5>
            <p className="text-muted mb-0">Project Manager</p>
          </div>
        </div>
        <div className="d-flex mb-3">
          <img
            src="/src/assets/images/users/user-3.jpg"
            className="me-2 rounded-circle"
            height="32"
            alt=""
          />
          <div className="w-100">
            <h5 className="mt-0 mb-1">Jane Smith</h5>
            <p className="text-muted mb-0">Developer</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TeamMembers; 