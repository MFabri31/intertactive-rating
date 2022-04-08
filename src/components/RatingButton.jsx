import React from "react";
import { Form } from "react-bootstrap";

const RatingButton = ({ value, handleRating, type }) => {
  return (
    <Form.Control
      className="btn rounded-pill p-3 px-4 border-0"
      type={type}
      value={value}
      onClick={handleRating}
    />
  );
};

export default RatingButton;
