import React, { useState } from "react";
import MessageCard from "./components/MessageCard";
import RatingCard from "./components/RatingCard";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const rated = (e) => setRating(e.target.value);

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            {isRated ? (
              <MessageCard rating={rating} setIsRated={setIsRated} />
            ) : (
              <RatingCard rated={rated} setIsRated={setIsRated} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
