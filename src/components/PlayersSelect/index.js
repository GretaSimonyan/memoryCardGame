import React, { useContext } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Select from '../StylesComp/Select';
import { 
    SET_PLAYERS_VALUE, 
    SET_CURRENT_PLAYER, 
    SET_PLAYERS_CURRENT_ARRAY 
} from '../../Actions';

function PlayersSelect (){
    const [state, dispatch] = useContext(Context);
    const players = [1,2,3,4]
    
    let arr = state.players.slice();
    arr.length = state.playersValue;

    const handleNumberChange = e => {
        dispatch({
            type: SET_PLAYERS_VALUE, 
            playersValue: players[e.target.value]
        });

        // dispatch(SET_PLAYERS_VALUE(players[e.target.value]))

        dispatch({
            type: SET_CURRENT_PLAYER,
            activePlayer: arr[Math.floor(Math.random()*arr.length)],
        });
    };

    function currArrChanged(){
        dispatch({
            type: SET_PLAYERS_CURRENT_ARRAY,
            currentPlayers: arr,
        });
    };

    return( 
        <View grid gap='15px'>
            <View fontSize='25px'> Players Number </View>
            <Select
                onChange={e => handleNumberChange(e)} 
                onClick={currArrChanged}
            >
                {
                    players.map((num, key) => 
                        <option key={key} value={key}>
                            {num}
                        </option>
                    )
                }
            </Select>
        </View>
    )
}

export default PlayersSelect;