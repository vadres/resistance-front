import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.6:8080";

export const buscarTodosJogadores = async () => {
    const { data } = await axios.get("/jogador/all");
    const { jogadores, fase } = data;

    console.log(data)
    return {
        jogadores,
        fase
    }
}

export const iniciarJogo = async (jogadores) => {
    const { data } = await axios.post("jogo/iniciar", { jogadores });

    return {
        jogadores: data,
        jogador: data[data.length - 1].nome,
        fase: 2 
    };
}

export const verInformacoes = async () => ({ fase: 3 });

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