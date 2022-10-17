import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import { GameContext, gameStateEmpty } from '../context/game-context';
import { searchAllPlayers } from '../actions/api';
import SeeFunctions from './see-functions/see-functions';
import SelectPlayers from './select-players/select-players';

function App() {
  const [ gameState, setGameState ] = useState(gameStateEmpty);

  useEffect(() => {
    searchAllPlayers(gameState, setGameState);
  }, [searchAllPlayers]);

  return (
    <GameContext.Provider value={{ ...gameState, setGameState }}>
      <SelectPlayers />
    </GameContext.Provider>
  );
}

export default App;
