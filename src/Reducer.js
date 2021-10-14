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
  SET_CARD_INFO,
  SET_CARDS,
  SET_VIEW,
  REST_CHOOSEN_CARDS,
  INCREMENT_ACTIVE_PLAYER_POINT,
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
    case SET_CURRENT_PLAYERS: {
      const { players } = state;
      const currentPlayers = [...players].splice(0, action.payload);
      const randomIndex = parseInt(Math.random() * 1000) % action.payload;
      return {
        ...state,
        currentPlayers,
        activePlayer: currentPlayers[randomIndex],
        playersValue: action.payload,
      };
    }
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload
      }
    case SET_FIRST_CARD:
      return {
        ...state,
        firstCard: action.payload
      }
    case SET_SECOND_CARD:
      return {
        ...state,
        secondCard: action.payload
      }
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload
      }
    case SET_VIEW:
      return {
        ...state,
        view: action.payload
      };
    case SET_CARD_INFO:
      const { cardId, isFlipped, canFlip } = action.payload;
      const nextCards = state.cards.map(({
          canFlip: prevCanFlip, isFlipped: prevIsFlipped, ...card
      }) => ({
        ...card,
        isFlipped: card.id !== cardId ? prevIsFlipped : isFlipped,
        canFlip: card.id !== cardId ? prevCanFlip : canFlip,
      }));

      return { ...state, cards: nextCards };
    case REST_CHOOSEN_CARDS:
      return {
        ...state,
        firstCard: null,
        secondCard: null,
      };
    case INCREMENT_ACTIVE_PLAYER_POINT:
      return {
        ...state,
        activePlayer: {
          ...state.activePlayer,
          point: state.activePlayer.point + 1,
        },
        currentPlayers: state.currentPlayers.map(player => (
          state.activePlayer.title === player.title ? ({
            ...player, point: state.activePlayer.point + 1,
          }) : player
        ))
      }
    default:
      return state;
    }
};

export default Reducer;