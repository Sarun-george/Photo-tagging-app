import GamePhoto from '../components/game_photo.jsx'
function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome to Photo tagging game</h1>
          <dialog>
            <p>Rules</p>
          </dialog>
        </div>
        <hr />
      <div className="home-content">
         <h2> Select your desired photo to start tagging!</h2>
      </div>
      <div className="game-photos">
        <GamePhoto />
      </div>
      </div>
    </div>
  );
}

export default Home;
