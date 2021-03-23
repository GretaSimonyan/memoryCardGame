import React, {createContext, useReducer} from "react";
import Reducer from './Reducer';

const initialState = {
    plValue: 1,
    width: 2,
    height: 2,
    plArr: ["A","B","C","D"],
    curArr: ["A"],
    currentPlayer: "A",
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;