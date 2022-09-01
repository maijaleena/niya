import Tile from "./Tile";
import Token from "./Token";
import Rules from "./Rules";
import Scoreboard from "./Scoreboard";
import { Container, Col, Row } from "react-bootstrap";

function Board() {
  return (
    <>
      <Container>
        <Row style={{ color: "blue", backgroundColor: "pink" }}>
          <Col style={{ border: "green" }}>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
          <Col>
            <Tile />
          </Col>
        </Row>
      </Container>
      <Token />
      <Token />
      <Token />
      <Token />
      <Rules />
      <Scoreboard />
    </>
  );
}

export default Board;
