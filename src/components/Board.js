import Tile from "./Tile";
import Rules from "./Rules";
import PlayerTokenContainer from "./PlayerTokenContainer";
import Scoreboard from "./Scoreboard";
import { Container, Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";

// Idea: would be cool to use useContexts/useReducer hooks in place of Redux

function Board() {
  const [tiles, setTiles] = useState([
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
    [1, 8],
    [2, 8],
    [3, 8],
    [4, 8],
  ]);
  const [players, setPlayers] = useState([
    { name: "Player 1", tokenCount: 8 },
    { name: "Player 2", tokenCount: 8 },
  ]);
  const [currentTile, setCurrentTile] = useState(null);
  const [firstTurn, setFirstTurn] = useState(true);
  const [playerTurn, setPlayerTurn] = useState(players[0]);

  function shuffleBoard(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //explanation for setBoard function: For React to recognize that there was a change in the board and re-render, I had to use the .slice() function. Basically, .slice() "copies" the array, and while doing so, it changes the references of the array without changing the content. Without .slice(), even though the contents were changed, the references don't change under the hood, so React doesn't recognize it as a change to the state. React only recognizes changes to references as changes (in terms of re-rendering)

  const setBoard = () => {
    let randomizedBoard = shuffleBoard(tiles);
    setTiles(randomizedBoard.slice());
  };

  const setCurrTile = (tile) => {
    setCurrentTile(tile);
    const index = tiles.indexOf(tile);
    tiles[index] = "Token";
    setTiles(tiles);
    switchPlayer();
  };

  const switchPlayer = () => {
    setPlayerTurn(playerTurn === players[0] ? players[1] : players[0]);
  };

  const row = (tile) => {
    return (
      <Col key={tile} style={{ width: "w-25" }}>
        <Tile setCurrTile={setCurrTile} tile={tile} />
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
      <Scoreboard
        playerTurn={playerTurn}
        currentTile={currentTile}
        setBoard={setBoard}
      />
      <Row>
        <PlayerTokenContainer player={players[0]} />
        <Col>
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
        </Col>
        <PlayerTokenContainer player={players[1]} />
      </Row>

      <Container style={{ backgroundColor: "pink" }}>
        <Rules />
      </Container>
    </>
  );
}

export default Board;
