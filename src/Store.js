import React, { createContext, useReducer } from "react";
import Reducer from './Reducer';
import cardImages from './components/GameOn/cards';

const initialState = {
  playersValue: 1,
  width: 2,
  height: 2,
  players: [
    { title: "A", point: 0 },
    { title: "B", point: 0 },
    { title: "C", point: 0 },
    { title: "D", point: 0 },
  ],
  //currentPlayers: [{ title: "A", point: 0 }],
  //activePlayer: { title: "A", point: 0 },
  winner: { title: "A", point: 0 },
  view: 'CHANGE SELECTION',
  firstCard: null,
  secondCard: null,
  cards: cardImages,
  error: null
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
export default Store;