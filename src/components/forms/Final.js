import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {
  const { name, email, phoneNumber, userName } = values;

  return (
    <div>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone Number:</strong> {phoneNumber}
          </p>
          <p>
            <strong>User Name:</strong> {userName}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Final;
