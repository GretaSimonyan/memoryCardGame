import {
    SET_PLAYERS_VALUE,
    SET_WIDTH,
    SET_HEIGHT,
    SET_ACTIVE_PLAYER,
    SET_CURRENT_PLAYERS,
    SET_WINNER
} from './actionTypes';

export function setPlayersValue(number){
    return{
        type: SET_PLAYERS_VALUE,
        playersValue: number
    }
};

export function setWidth(number){
    return{
        type: SET_WIDTH,
        width: number
    }
};

export function setHeight(number){
    return{
        type: SET_HEIGHT,
        height: number
    }
};

export function setActivePlayer(number){
    return{
        type: SET_ACTIVE_PLAYER,
        activePlayer: number
    }
};


export function setCurrentPlayers(number){
    return{
        type: SET_CURRENT_PLAYERS,
        currentPlayers: number
    }
};

export function setWinner(number){
    return{
        type: SET_WINNER,
        winner: number
    }
};