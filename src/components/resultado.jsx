import Vistos from "./vistos";
import { Header, Image, Button, Icon, List } from 'semantic-ui-react';
import { useContext } from "react";
import { GameContext } from "../context/game-context";

import { result } from "../actions/api";

const Resultado = () => { 
    const { players, fase, setGameState } = useContext(GameContext); 
    const gameState = { players, fase };

    if (fase == 2) {
        return <div className="result">
             <Header as='h2'>Jogo iniciado</Header>
             <Button onClick={() => result(gameState, setGameState)} positive icon labelPosition='right'>
                Revelar os Bandidim
                <Icon name='right arrow' />
            </Button>
        </div>;
    } else if (fase == 3) {
        return <div className="result">
            <List selection verticalAlign='middle'>
                {
                    players.map(player => (
                        <List.Item key={player.name}>
                        <Image avatar src={require(`../images/${player['function']}.png`)} />
                        <List.Content>
                            <List.Header as='a'>{player.name}</List.Header>
                        </List.Content>
                        </List.Item>
                    ))
                }
            </List>    
        </div>;
    } else {
        return <></>;
    }
}

export default Resultado;
