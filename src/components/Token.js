import { AiOutlineCoffee } from "react-icons/ai";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

function Token() {
  return (
    <Draggable>
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
