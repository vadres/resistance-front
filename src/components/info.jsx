import Vistos from "./vistos";
import { Header, Image, Button, Icon } from 'semantic-ui-react';
import { useContext } from "react";
import { GameContext } from "../context/game-context";

import { next } from "../actions/api";

const Info = () => { 
    const { fase, players, nome, funcao, observar, vistos, setGameState } = useContext(GameContext);   
    const gameState = { fase, players, nome, funcao, observar, vistos };

    return (fase == 1)?
        <div className="info">
            <Header as='h2'>{nome}</Header>
            <Image src={require(`../images/${funcao}.png`)} circular size='tiny' />
            <Header color='orange' as='h3'>{funcao}</Header>      
            <Header as='h4'>{observar}</Header>
            <Vistos atores={vistos} />
            <br />
            <Button onClick={() => next(gameState, setGameState)} positive icon labelPosition='right'>
                Próximo
                <Icon name='right arrow' />
            </Button>
        </div>: <></>
}

export default Info;
