import boatingcouples from "../src/assests/boating_couples.png";
import singer from "../src/assests/singer.png";
import slidingkid from "../src/assests/sliding_kid.png";
import icecream_man from "../src/assests/icecream_man.png";
import flowerlady from "../src/assests/flower_lady.png";

function GameCharacters() {
  const characters = [
    {
      id: 1,
      image: boatingcouples,
    },
    {
      id: 2,
      image: singer,
    },
    {
      id: 3,
      image: slidingkid,
    },
    {
      id: 4,
      image: icecream_man,
    },
    {
      id: 5,
      image: flowerlady,
    },
  ];
  return (
    <>
        {characters.map((character) => (
          <div className="game-character" key={character.id}>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
    </>
  );
}

export default GameCharacters;
