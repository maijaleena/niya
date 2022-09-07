import { AiOutlineCoffee } from "react-icons/ai";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";

function Token() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const DraggableEventHandler = async (data) => {
    try {
      setPosition({ x: data.x, y: data.y });
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    console.log("heres the position", position);
    //do something here with the position
  }, [position]);

  return (
    <Draggable onStop={(e, data) => DraggableEventHandler(data)}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "12rem", width: "12rem", backgroundColor: "darkred" }}
      >
        <AiOutlineCoffee />
      </Container>
    </Draggable>
  );
}

export default Token;
