import React from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import RatingButton from "./RatingButton";
import iconStar from "../images/icon-star.svg";

const ratingValues = [1, 2, 3, 4, 5];

const RatingCard = ({ rated, setIsRated }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRated(true);
  };

  return (
    <Card className="card text-white py-4 my-card">
      <Card.Body className="card-body px-4">
        <Stack className="icon-circle"></Stack>
        <Card.Img src={iconStar} className="icon-star" />
        <Card.Title className="my-3 fs-4">How did we do?</Card.Title>
        <Card.Text className="text-gray">
          Please let us know how did with your support request. All feedback is
          apreciated to help us improve our effering!
        </Card.Text>
        <Form>
          <Stack direction="horizontal" gap={3} className="my-4">
            {ratingValues.map((value) => (
              <RatingButton
                key={value}
                value={value}
                handleRating={rated}
                type="button"
              />
            ))}
          </Stack>
          <Stack gap={2}>
            <Button
              className="btn-warning rounded-pill text-uppercase"
              type="submit"
              onClick={handleSubmit}
            >
              submit
            </Button>
          </Stack>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RatingCard;
