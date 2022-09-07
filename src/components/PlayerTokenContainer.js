import React from "react";
import { Container, Col, ModalTitle } from "react-bootstrap";
import Token from "./Token";

function PlayerTokenContainer(player) {
  player = player.player
  let tokenCount = player.tokenCount


  const tokenList = (num) => {
    const tokens=[]
    for (let i=0;i<num;i++) {
          tokens.push(<Token player={player}/>)
    }
    return tokens
  }


  return (
    <Col style={{ backgroundColor:"pink" }}>
      <ModalTitle style={{backgroundColor: 'grey', textAlign:"center"  }}> 
        {player.name}'s Tokens
      </ModalTitle>
      <Container>
        {tokenList(tokenCount)}       
      </Container>
    </Col>
  );
}

export default PlayerTokenContainer;
