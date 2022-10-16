import Vistos from "./vistos";
import { Header, Image, Button, Icon } from 'semantic-ui-react';
import { useContext } from "react";
import { GameContext } from "../context/game-context";

import { verFuncao } from "../actions/api";

const Top = () => {
    const { nome, fase, players, setGameState } = useContext(GameContext);
    const gameState = { nome, fase, players };

    return (fase == 0)?
        <div className="info">
            <Header as='h2'>{nome}</Header>
            <Button onClick={() => verFuncao(gameState, setGameState)} color='twitter' icon labelPosition='right'>
                Ver função
                <Icon name='right arrow' />
            </Button>
        </div>: <></>
};


export default Top;
