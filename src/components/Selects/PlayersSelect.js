import React, { useContext } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Select from '../StylesComp/Select';
import { 
    setPlayersValue,
    setActivePlayer,
    setCurrentPlayers
} from '../../Actions';

function PlayersSelect (){
    const [state, dispatch] = useContext(Context);
    const players = [1,2,3,4]
    
    let arr = state.players.slice();
    arr.length = state.playersValue;

    const handleNumberChange = e => {
        dispatch(setPlayersValue(players[e.target.value]));
        dispatch(setActivePlayer(arr[Math.floor(Math.random()*arr.length)]))
    };

    function currArrChanged(){
        dispatch(setCurrentPlayers(arr))
    };

    return( 
        <View grid gap='15px'>
            <View fontSize='25px'> Players Number </View>
            <Select
                onChange={handleNumberChange} 
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