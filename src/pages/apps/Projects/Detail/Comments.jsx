import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comments = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Comments</h4>
        <div className="d-flex mb-3">
          <img
            src="/src/assets/images/users/user-1.jpg"
            className="me-2 rounded-circle"
            height="32"
            alt=""
          />
          <div className="w-100">
            <h5 className="mt-0 mb-1">John Doe</h5>
            <p className="text-muted">
              <small>10 hours ago</small>
            </p>
            <p>This is a sample comment. You can add your comments here.</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Comments; 