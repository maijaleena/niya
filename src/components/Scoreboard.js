import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Tile from "./Tile";
import Token from './Token';

function Scoreboard({ setBoard }) {
  return (
    <>
    <Container className="d-flex align-items-center" style={{backgroundColor: 'pink', height: '250px', width: '820px', textAlign: 'center' }}> 

      <Container   style={{ width: "33%"  }}> 
        Current Tile
        <Tile  />
      </Container>

      <Container className = "float-middle "  style={{width: "33%" }}> 
        <Button onClick={() => setBoard()}> setBoard </Button>
      </Container>


      <Container  style={{ width: "33%"  }}> 
        Player's Turn
        <Token  />
      </Container>
    
    </Container>
    </>
    
  );
}

export default Scoreboard;
