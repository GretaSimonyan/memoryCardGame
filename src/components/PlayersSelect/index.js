import React, { useContext } from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store'

function PlayersSelect (){
    const [state, dispatch] = useContext(Context);
    const players = [2,3,4]

    const handleNumberChange = e => {
        dispatch({
            type: 'SET_PLAYERS_VALUE', 
            plValue: players[e.target.value]
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