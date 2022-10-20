import Vistos from "./vistos";
import { Header, Image, Button, Icon } from 'semantic-ui-react';
import { useContext } from "react";
import { GameContext } from "../context/game-context";

import { verInformacoes } from "../actions/api";

const Top = () => {
    const { nome, fase, players, setGameState } = useContext(GameContext);
    const gameState = { nome, fase, players };

    return (fase == 2)?
        <div className="info">
            <Header as='h2'>{nome}</Header>
            <Button onClick={() => verInformacoes(gameState, setGameState)} color='twitter' icon labelPosition='right'>
                Ver função
                <Icon name='right arrow' />
            </Button>
        </div>: <></>
};


export default Top;
