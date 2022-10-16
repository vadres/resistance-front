import React from "react";

export const gameStateEmpty = {
    players: [],
    nome: "",   
    funcao: "",
    observar: "",
    vistos: [],
    fase: 0,
}

export const GameContext = React.createContext({
    ...gameStateEmpty,
    setGameState: (state) => {}
});