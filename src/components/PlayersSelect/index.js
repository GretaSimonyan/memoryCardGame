import React, { useContext, useEffect } from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store'

function PlayersSelect (){
    const [state, dispatch] = useContext(Context);
    const players = [2,3,4]
    let plArr = ["A","B","C","D"];
    plArr.length = state.plValue;

    const handleNumberChange = e => {
        dispatch({
            type: 'SET_PLAYERS_VALUE', 
            plValue: players[e.target.value]
        });
        dispatch({
            type: 'SET_CURRENT_PLAYER',
            current: plArr[Math.floor(Math.random()*plArr.length)],
        });
        // console.log(e.target.value)
    };

    return( 
        <View flex fD='column' alignI='space-between' justC='center'>
            <View fontSize='25px'> Players </View>
            <select onChange={e => handleNumberChange(e)}>
                {
                    players.map((num, key) => 
                        <option key={key} value={key}>
                            {num}
                        </option>
                    )
                }
            </select>
        </View>
    )
}

export default PlayersSelect;