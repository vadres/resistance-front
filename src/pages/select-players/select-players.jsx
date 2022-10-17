import { useContext, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Label, Image, Container, Button } from 'semantic-ui-react';

import { GameContext } from '../../context/game-context';
import { initGame } from '../../actions/api';
import PlayerLabel from '../../components/player-label';

function SelectPlayers() {
    const [selected, setSelected] = useState([]);

    const { fase, players, nome, funcao, observar, vistos, setGameState } = useContext(GameContext);   
    const gameState = { fase, players, nome, funcao, observar, vistos };


    function clickLabel(player, players, addPlayer) {
        const index = players.indexOf(player);

        if (index > -1) {
            players.splice(index, 1);
            addPlayer(players);
            return "";
        } else {
            addPlayer([...players, player]);
            return "blue";
        }
    }

    return (
        <Container text style={{ display: "flex", flexDirection: "column"}}>
            {
                players.map(player => (
                    <PlayerLabel key={player.id} player={player} onClick={() => clickLabel(player, selected, setSelected)} />
                ))
            }

            <Button onClick={() => initGame(selected, gameState, setGameState)} positive>Iniciar Partida</Button>
        </Container>
    );
}

export default SelectPlayers;
