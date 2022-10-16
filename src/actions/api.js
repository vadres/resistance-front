export const verFuncao = async (gameState, setGameState) => {
    await fetch("http://10.80.40.41:8080/search/" + gameState.players.pop())
    .then((response) => response.json())
    .then(data => {
        setGameState({
            ...gameState,
            players: gameState.players,
            funcao: data['minhaPosicao'],
            observar: data['observar'],
            vistos: data['players'],
            fase: 1            
        });      
    });
};

export const initGame = async (gameState, setGameState) => {
    await fetch("http://10.80.40.41:8080/init", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "players": [
                    "Victor",
                    "Joanderson",
                    "Gabriel",
                    "Maurinho",
                    "Glenda"
                ]
            }
        )
    }).then((response) => response.json())
    .then(data => {
        setGameState({
            ...gameState,
            players: data,
            nome: data[data.length - 1],
            fase: 0            
        }); 
    });
}

export const next = (gameState, setGameState) => {
    if (gameState.players.length - 1 < 0) {
        setGameState({
            ...gameState,
            nome: gameState.players[gameState.players.length - 1],
            fase: 2            
        });

        return;
    }

    setGameState({
        ...gameState,
        nome: gameState.players[gameState.players.length - 1],
        fase: 0            
    }); 
}

export const result = async (gameState, setGameState) => {
    await fetch("http://10.80.40.41:8080/reveal")
    .then((response) => response.json())
    .then(data => {
        setGameState({
            ...gameState,
            players: data,
            fase: 3            
        });          
    });
}