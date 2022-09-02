import Tile from "./Tile";
import Token from "./Token";
import Rules from "./Rules";
import Scoreboard from "./Scoreboard";
import { Container, Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function Board() {
  const [tiles, setTiles] = useState([
    "1A",
    "2A",
    "3A",
    "4A",
    "1B",
    "2B",
    "3B",
    "4B",
    "1C",
    "2C",
    "3C",
    "4C",
    "1D",
    "2D",
    "3D",
    "4D",
  ]);

  useEffect(() => {
    console.log("original tiles", tiles);
  }, []);

  function shuffleBoard(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const setBoard = () => {
    let randomizedBoard = shuffleBoard(tiles);
    setTiles(randomizedBoard);
    console.log("tiles", tiles);
  };

  return (
    <>
      {console.log("original tiles", tiles)}
      <Scoreboard setBoard={setBoard} />
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
    </>
  );
}

export default Board;
