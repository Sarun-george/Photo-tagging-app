import { useNavigate } from 'react-router'
import gamePhotoImage from "../src/assests/City Park Festival Find-and-Seek.png";

function GamePhoto() {

   const navigate = useNavigate()

  return (
    <div>
      <button className="game-photo-container" onClick={() => navigate("/game")}>
        <div>
          <div className="game-photo">
            <img src={gamePhotoImage} alt="City park festival scene" />
          </div>
          <div className="game-photo-title">
            <h3>City Park Festival</h3>
          </div>
        </div>
      </button>
    </div>
  );
}

export default GamePhoto;
