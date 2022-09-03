import Tile from "./Tile";
import Token from "./Token";
import Rules from "./Rules";
import Scoreboard from "./Scoreboard";
import { Container, Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

  function shuffleBoard(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //explanation for setBoard function: For React to recognize that there was a change in the board and re-render, I had to use the .slice() function. Basically, .slice() "copies" the array, and while doing so, it changes the references of the array without changing the content. Without .slice(), even though the contents were changed, but the references don't change under the hood, so React doesn't recognize it as a change to the state. React only recognizes changes to references as changes (in terms of re-rendering)

  const setBoard = () => {
    let randomizedBoard = shuffleBoard(tiles);
    setTiles(randomizedBoard.slice());
  };

  const row = (tile) => {
    return (
      <Col style={{ width: "w-25" }}>
        <Tile tile={tile} />
      </Col>
    );
  };

  return (
    <>
      <Container
        className="mx-auto"
        style={{ width: "200px", textAlign: "center" }}
      >
        <h1>Niya</h1>
      </Container>

      <Scoreboard setBoard={setBoard} />

      <Container
        className="mx-auto"
        style={{ marginTop: "10px", height: "840px", width: "860px" }}
      >
        <Row style={{ height: "13rem", width: "54rem" }}>
          {tiles.slice(0, 4).map((tile) => row(tile))}
        </Row>
        <Row style={{ height: "13rem", width: "54rem" }}>
          {tiles.slice(4, 8).map((tile) => row(tile))}
        </Row>
        <Row style={{ height: "13rem", width: "54rem" }}>
          {tiles.slice(8, 12).map((tile) => row(tile))}
        </Row>
        <Row style={{ height: "13rem", width: "54rem" }}>
          {tiles.slice(12, 16).map((tile) => row(tile))}
        </Row>
      </Container>

      <Container style={{ backgroundColor: "pink" }}>
        <Rules />
      </Container>
    </>
  );
}

export default Board;
