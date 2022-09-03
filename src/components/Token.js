import { AiOutlineCoffee } from "react-icons/ai";
import { Container } from "react-bootstrap";

function Token() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '12rem', width: '12rem', backgroundColor: 'darkred' }}>
      <AiOutlineCoffee />
    </Container>
  );
}

export default Token;