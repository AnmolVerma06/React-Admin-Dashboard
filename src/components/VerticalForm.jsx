import React from "react";
import { Form } from "react-bootstrap";

const VerticalForm = ({ children, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  );
};

export default VerticalForm; 