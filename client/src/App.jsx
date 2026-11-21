import { Routes, Route } from 'react-router'
import Home from '../pages/home';
import Game from '../pages/game.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;

