import { useContext, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Label, Image, Container, Button } from 'semantic-ui-react';

import PlayerLabel from '../../components/player-label';

function SelectPlayers() {
    const [selected, setSelected] = useState([]);

    const { players } = {
        players: ['Victor', 'Glenda', 'Maurinho','Victor', 'Glenda', 'Maurinho']
    }; //useContext(GameContext); 

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
                    <PlayerLabel player={player} onClick={() => clickLabel(player, selected, setSelected)} />
                ))
            }

            <Button positive>Iniciar Partida</Button>
        </Container>
    );
}

export default SelectPlayers;
