import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import { GameContext, gameStateEmpty } from '../context/game-context';
import { buscarTodosJogadores } from '../actions/api';
import GetInfo from './get-info/GetInfo';
import SelectPlayers from './select-players/SelectPlayers';

function App() {
  const [ gameState, setGameState ] = useState(gameStateEmpty);

  const getPage = () => {
    const { fase } = gameState;
    return fase <= 1? <SelectPlayers />: <GetInfo />
  }

  useEffect(() => {
    let state =  buscarTodosJogadores();
   
    setGameState({
      ...gameState,
      ...state           
    }); 
  }, [buscarTodosJogadores]);

  return (
    <GameContext.Provider value={{ ...gameState, setGameState }}>
      { getPage() }
    </GameContext.Provider>
  );
}

export default App;
