import {
    SET_PLAYERS_VALUE,
    SET_WIDTH,
    SET_HEIGHT,
    SET_ACTIVE_PLAYER,
    SET_PLAYERS,
    SET_CURRENT_PLAYERS,
    SET_WINNER
} from './actionTypes';

const Reducer = (state, action) => {
    switch (action.type) {
        case SET_PLAYERS_VALUE:
            return {
                ...state,
                playersValue: action.playersValue
            };
        case SET_WIDTH:
            return {
                ...state,
                width: action.width
            };
        case SET_HEIGHT:
            return {
                ...state,
                height: action.height
            };
        case SET_ACTIVE_PLAYER:
            return {
                ...state,
                activePlayer: action.activePlayer
            };
        case SET_PLAYERS:
            return {
                ...state,
                players: action.players
            };
        case SET_CURRENT_PLAYERS:
            return {
                ...state,
                currentPlayers: action.currentPlayers
            };
        case SET_WINNER:
            return {
                ...state,
                winner: action.winner
            }
        // case 'REMOVE':
        //     return {
        //         ...state,
        //         posts: state.posts.filter(post => post.id !== action.payload)
        //     };
        case 'LOADING':
            return {
                ...state,
                load: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;