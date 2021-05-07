import {
    SET_PLAYERS_VALUE,
    SET_WIDTH,
    SET_HEIGHT,
    SET_ACTIVE_PLAYER,
    SET_CURRENT_PLAYERS,
    SET_WINNER,
    SET_FIRST_CARD,
    SET_SECOND_CARD,
    SET_CARDS
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


export function setCurrentPlayers(arr){
    return{
        type: SET_CURRENT_PLAYERS,
        currentPlayers: arr
    }
};

export function setWinner(number){
    return{
        type: SET_WINNER,
        winner: number
    }
};

export function setFirstCard(card){
    return{
        type: SET_FIRST_CARD,
        firstCard: card
    }
};
export function setSecondCard(card){
    return{
        type: SET_SECOND_CARD,
        secondCard: card
    }
};
export function setCards(cards){
    return{
        type: SET_CARDS,
        cards: cards
    }
};