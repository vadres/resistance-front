import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import { GameContext, gameStateEmpty } from '../context/game-context';
import { initGame } from '../actions/api';
import SeeFunctions from './see-functions/see-functions';
import SelectPlayers from './select-players/select-players';

function App() {
  const [ gameState, setGameState ] = useState(gameStateEmpty);

  useEffect(() => {
    initGame(gameState, setGameState);
  }, [initGame]);

  return (
    <GameContext.Provider value={{ ...gameState, setGameState }}>
      <SelectPlayers />
      <SeeFunctions />
    </GameContext.Provider>
  );
}

export default App;
