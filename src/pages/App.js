import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import Info from '../components/info';
import Top from '../components/top';
import Resultado from '../components/resultado';
import AddPlayer from '../components/add-player';
import './App.css';
import { GameContext, gameStateEmpty } from '../context/game-context';
import { initGame } from '../actions/api';

function App() {
  const [ gameState, setGameState ] = useState(gameStateEmpty);

  useEffect(() => {
    initGame(gameState, setGameState);
  }, [initGame]);

  return (
    <GameContext.Provider value={{ ...gameState, setGameState }}>
      <Container text>
        <AddPlayer />
        <Top />
        <Info />
        <Resultado />
      </Container>
    </GameContext.Provider>
  );
}

export default App;
