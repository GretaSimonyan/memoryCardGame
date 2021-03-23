import React, { useContext } from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store'

function PlayersSelect (){
    const [state, dispatch] = useContext(Context);
    const players = [1,2,3,4]
    
    let arr = state.plArr.slice();
    arr.length = state.plValue;

    const handleNumberChange = e => {
        dispatch({
            type: 'SET_PLAYERS_VALUE', 
            plValue: players[e.target.value]
        });
        dispatch({
            type: 'SET_CURRENT_PLAYER',
            currentPlayer: arr[Math.floor(Math.random()*arr.length)],
        });
    };

    function currArrChanged(){
        dispatch({
            type: 'SET_PLAYERS_CURRENT_ARRAY',
            curArr: arr,
        });
    }

    return( 
        <View flex fD='column' alignI='space-between' justC='center'>
            <View fontSize='25px'> Players </View>
            <select onChange={e => handleNumberChange(e)} onClick={ () => currArrChanged()}>
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