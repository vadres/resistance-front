import { useContext, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Label, Image, Container, Button } from 'semantic-ui-react';

import { GameContext } from '../../context/game-context';
import { iniciarJogo } from '../../actions/api';
import PlayerLabel from '../../components/player-label';

function SelectPlayers() {
    const [selected, setSelected] = useState([]);

    const gameState = useContext(GameContext);   
    const { jogadores, setGameState } = gameState;

    const handleIniciarJogo = () => {
        const infoJogo = iniciarJogo(selected);

        setGameState({
            ...gameState,
            ...infoJogo            
        }); 
    }

    const handleClickLabel = (player) => {
        const index = selected.indexOf(player);

        if (index > -1) {
            selected.slice(index, 1);
            setSelected(selected);
            return "teal";
        } else {
            setSelected([...selected, player]);
            return "olive";
        }
    }
    

    return (
        <Container text style={{ display: "flex", flexDirection: "column"}}>
            {
                jogadores.map(jogador => (
                    <PlayerLabel key={jogador.id} player={jogador} onClick={() => handleClickLabel(jogador)} />
                ))
            }

            <Button onClick={handleIniciarJogo} positive>Iniciar Partida</Button>
        </Container>
    );
}

export default SelectPlayers;
