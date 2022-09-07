import { FaBeer } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

function Tile({ setCurrTile, tile, isCurrent=false }) {

  const tileHandler = () => {
    setCurrTile(tile)
  }

  return (
      <Button style={{ height: '12rem', width: '12rem', backgroundColor: 'red'}} onClick={tileHandler}>
        <FaBeer /> 
        {tile}
      </Button>
  );
}

export default Tile;
