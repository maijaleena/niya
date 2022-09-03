import { FaBeer } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

function Tile({ tile }) {
  return (
      <Button style={{ height: '12rem', width: '12rem', backgroundColor: 'red'}}>
        <FaBeer /> 
        {tile}
      </Button>
  );
}

export default Tile;
