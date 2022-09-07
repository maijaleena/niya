import React from "react";
import { Container, Col, ModalTitle } from "react-bootstrap";
import Token from "./Token";

function PlayerTokenContainer() {
  return (
    <Col style={{ backgroundColor:"pink" }}>
      <ModalTitle style={{backgroundColor: 'grey', textAlign:"center"  }}> 
        Player One's Tokens
      </ModalTitle>
      <Container>
        <Token/>
        <Token/>
        <Token/>
        <Token/>
      </Container>
    </Col>
  );
}

export default PlayerTokenContainer;
