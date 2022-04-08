import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import thanksIcon from "../images/illustration-thank-you.svg";

const MessageCard = ({ rating, setIsRated }) => {
  return (
    <Card className="text-center text-white py-4 my-card">
      <Card.Body className="card-body">
        <Card.Img
          src={thanksIcon}
          alt="thank you icon"
          style={{ width: "10rem" }}
        />
        <Stack className="rounded-pill w-50 my-3 mx-auto py-1 my-card-badge">
          You selected {rating} of 5
        </Stack>
        <Card.Title className="card-title py-2">Thank You!</Card.Title>
        <Card.Text className="card-text text-secondary">
          We appreciate you taking the time to give a rating .If you need more
          support, don't hesitate to get in touch!
        </Card.Text>
        <Button
          variant="link"
          className="text-orange"
          onClick={() => setIsRated(false)}
        >
          Go back
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MessageCard;
