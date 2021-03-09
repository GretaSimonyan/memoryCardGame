import React, {createContext, useReducer} from "react";
import Reducer from './Reducer';

const initialState = {
    plValue: 2,
    width: 2,
    height: 2,
    current: "A",
    play: false,
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