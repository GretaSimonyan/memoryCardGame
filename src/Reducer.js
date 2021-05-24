import {
    SET_PLAYERS_VALUE,
    SET_WIDTH,
    SET_HEIGHT,
    SET_ACTIVE_PLAYER,
    SET_PLAYERS,
    SET_CURRENT_PLAYERS,
    SET_WINNER,
    SET_FIRST_CARD,
    SET_SECOND_CARD,
    SET_CARDS,
    SET_VIEW
} from './actionTypes';

const Reducer = (state, action) => {
    switch (action.type) {
        case SET_PLAYERS_VALUE:
            return {
                ...state,
                playersValue: action.payload
            };
        case SET_WIDTH:
            return {
                ...state,
                width: action.payload
            };
        case SET_HEIGHT:
            return {
                ...state,
                height: action.payload
            };
        case SET_ACTIVE_PLAYER:
            return {
                ...state,
                activePlayer: action.payload
            };
        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        case SET_CURRENT_PLAYERS:
            return {
                ...state,
                currentPlayers: action.payload
            };
        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            }
        case SET_FIRST_CARD:
            return{
                ...state,
                firstCard: action.payload
            }
        case SET_SECOND_CARD:
            return{
                ...state,
                secondCard: action.payload
            }
        case SET_CARDS:
            return{
                ...state,
                cards: action.payload
            }
        case SET_VIEW:
            return {
                ...state,
                view: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;