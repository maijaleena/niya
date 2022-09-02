import { FaBeer } from "react-icons/fa";

function Tile({ tile }) {
  return (
    <div>
      <FaBeer />
      {tile}
    </div>
  );
}

export default Tile;
