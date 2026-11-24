import gamePhotoImage from "../src/assests/City Park Festival Find-and-Seek.png";
import GameCharacters from "../components/game_characters";

function Game() {
  return (
    <div>
      <div className="game-header">
        <h1>City Park Festival</h1>
      </div>
      <div className="game-content">
        <div className="game-instructions">
          <p>Find all the hidden characters in the Photo!</p>
          <p>
            Click the photo, or use the arrow keys and Enter, to tag a
            character.
          </p>
        </div>
        <div className="main-game-tag">
            <div className="game-tagging">
          <div className="game-characters">
            <GameCharacters/>
          </div>
          <div className="game-photo-1">
            <img src={gamePhotoImage} alt="City park festival scene" />
          </div>
        </div>
        <div className="game-tagging-info">
          <div className="game-timer">
            <p>
              Timer: <span id="timer">60</span> seconds
            </p>
          </div>
          <div className="game-leaderboard">
            <h3>Leaderboard</h3>
            <hr className="leaderboard-hr" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
