import React, {createContext, useReducer} from "react";
import Reducer from './Reducer';

const initialState = {
    plValue: 1,
    width: 2,
    height: 2,
    plArr: [{title:"A", point:0},
        {title:"B", point:0},
        {title:"C", point:0},
        {title:"C", point:0},
    ],
    curArr: [{title:"A", point:0}],
    currentPlayer: {title:"A", point:0},
    winner: {title:"A", point:0},
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