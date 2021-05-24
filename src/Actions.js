import {
  SET_PLAYERS_VALUE,
  SET_WIDTH,
  SET_HEIGHT,
  SET_ACTIVE_PLAYER,
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

export function setPlayersValue(number){
  return{
    type: SET_PLAYERS_VALUE,
    payload: number
  }
};

export function setWidth(number){
  return{
    type: SET_WIDTH,
    payload: number
  }
};

export function setHeight(number){
  return{
    type: SET_HEIGHT,
    payload: number
  }
};

export function setActivePlayer(player){
  return{
    type: SET_ACTIVE_PLAYER,
    payload: player
  }
};

export function setCurrentPlayers(arr){
  return{
    type: SET_CURRENT_PLAYERS,
    payload: arr
  }
};

export function setWinner(number){
  return{
    type: SET_WINNER,
    payload: number
  }
};

export function resetChoosenCards(){
  return {
    type: REST_CHOOSEN_CARDS,
  }
};

export function setFirstCard(card){
  return{
    type: SET_FIRST_CARD,
    payload: card
  }
};
export function setSecondCard(card){
  return{
    type: SET_SECOND_CARD,
    payload: card
  }
};
export function setCards(cards){
  return{
    type: SET_CARDS,
    payload: cards
  }
};
export function setCardInfo(payload) {
  return{
    type: SET_CARD_INFO,
    payload
  } 
};
export function setView(str){
  return{
    type: SET_VIEW,
    payload: str
  }
};

export function incrementActivePlayerPoint(){
  return {
    type: INCREMENT_ACTIVE_PLAYER_POINT,
  }
}